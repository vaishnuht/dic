const container = document.querySelector(".container");
const chatContainer = document.querySelector(".chats-container");
const promptForm = document.querySelector(".promt-form");
const promptInput = promptForm.querySelector(".prompt-input");
const fileInput = promptForm.querySelector("#file-input"); 
const fileUploadWrapper = promptForm.querySelector(".file-upload-wrapper"); 
const themeToggle = document.querySelector("#theme-toggle-btn"); 


// api key 
const GEMINI_API_KEY = "AIzaSyCXHXfxcmUpbSYlMciN2P3KQ2SvwCwg27A";
const API_URL =  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`; 

let typingInterval, controller;
const chatHistory = [];
let userData = { message: "", file: {} };

const createMsgElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
}

const scrollToBottom = () => container.scrollTo({ top: container.scrollHeight, behavior: "smooth" })

const typingEffect = (text, textElement, botMsgDiv) => {
  textElement.textContent = "";
  const words = text.split(" ");
  let wordIndex = 0 ;

   typingInterval = setInterval(() => {
    if(wordIndex < words.length){
      textElement.textContent += (wordIndex === 0 ? "" : " ") + words[wordIndex++];
      scrollToBottom();
    }
    else{
      clearInterval(typingInterval)
      botMsgDiv.classList.remove("loading");
      document.body.classList.remove("bot-responding");
      scrollToBottom();
    }
  }, 40)

}
 

//  make the api call and generate the bot response 
const generateResponse = async (botMsgDiv) => {
  const textElement = botMsgDiv.querySelector(".message-text");
  controller = new AbortController();
//  Add user message to the chat history
  chatHistory.push({
    role: "user",
    parts: [{text: userData.message }, ...(userData.file.data ? [{ inline_data: (({ fileName, isImage, ...rest}) => rest) (userData.file)}] : [] )]
  });

  try {
    // send the chat history to the api to get a response 
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify( {contents : chatHistory}),
      signal: controller.signal
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    //  process the response text and display with typing effect
    const responseText = data.candidates[0].content.parts[0].text.replace(/\*\*([^*]+)\*\*/g, "$1").trim();
    typingEffect(responseText, textElement, botMsgDiv);

    chatHistory.push({ role: "model", parts: [{text: responseText}]});
    
    // console.log(chatHistory);
    // textElement.textContent = responseText;
    // console.log(data); 
    // response on console     
  }
  catch(error){
    // console.log(error);

    textElement.style.color = "#d62939";
    textElement.textContent = error.name === "AbortError" ? "Response generation stopped." : error.message;
    botMsgDiv.classList.remove("loading");
    document.body.classList.remove("bot-responding");
    scrollToBottom();
  }
  finally {
    userData.file = {};
  }
}

// Handle the form submission
const handleFormSubmit = (e) => {
  e.preventDefault();
  const userMessage = promptInput.value.trim();
  if (!userMessage ||   document.body.classList.contains("bot-responding")) return;

  promptInput.value = "";
  userData.message = userMessage;
  document.body.classList.add("bot-responding", "chats-active");
  fileUploadWrapper.classList.remove("active", "img-attached" , "file-attached");


  // generate user message html and add in the chats container 
  const userMsgHTML = `<p class="message-text"></p>
  ${userData.file.data ? (userData.file.isImage ? `<img src="data:${userData.file.mime_type}; base64, ${userData.file.data}" class="img-attachment" />` : `<p class = "file-attachment"> <span class="material-symbols-rounded"> description</span>${userData.file.fileName}</p>`): ""}
  `;


  const userMsgDiv = createMsgElement(userMsgHTML, "user-message");
  userMsgDiv.querySelector(".message-text").textContent = userMessage;
  chatContainer.appendChild(userMsgDiv);
  // console.log(userMessage);
  scrollToBottom();


  setTimeout(() => {
    // generate bot msg after 600 ms 
    const botMsgHTML = `<img src="plant.png" alt="bot icon" class="avatar"> <p class="message-text"> Growing your answer... Please wait! </p>`;
    const botMsgDiv = createMsgElement(botMsgHTML, "bot-message", "loading");

    // userMsgDiv.querySelector(".message-text").textContent = userMessage;
    chatContainer.appendChild(botMsgDiv);
    scrollToBottom();
    generateResponse(botMsgDiv);
  }, 600);
}


// handle file input change (file upload)
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;

  // console.log(file);
  const isImage = file.type.startsWith("image/");
  const reader = new FileReader();
  reader.readAsDataURL(file); 
  
  reader.onload = (e) => {
    fileInput.value = "";
    const base64String = e.target.result.split(",")[1];
    fileUploadWrapper.querySelector(".file-preview").src = e.target.result;
    fileUploadWrapper.classList.add("active", isImage ? "img-attached" : "file-attached");
  
    // store file data into object
    userData.file = {fileName : file.name, data: base64String, mime_type: file.type, isImage };

  }
});

// cancel file upaload
document.querySelector("#cancel-file-btn").addEventListener("click", () => {
  userData.file = {};
  fileUploadWrapper.classList.remove("active", "img-attached" , "file-attached");
});


document.querySelector("#stop-response-btn").addEventListener("click", () => {
  userData.file = {};
  controller?.abort();
  clearInterval(typingInterval);
  chatContainer.querySelector(".bot-message.loading").classList.remove("loading");
  document.body.classList.remove("bot-responding");
});


// cancel file upaload
document.querySelector("#cancel-file-btn").addEventListener("click", () => {
  userData.file = {};
  fileUploadWrapper.classList.remove("active", "img-attached" , "file-attached");
});

// delete all chats 
document.querySelector("#delete-chats-btn").addEventListener("click", () => {
  chatHistory.length = 0;
  chatContainer.innerHTML = "";
  document.body.classList.remove("bot-responding", "chats-active");
});


// handle the suggestion click
document.querySelectorAll(".suggestions-item").forEach( item => {
  item.addEventListener("click", () => {
    promptInput.value = item.querySelector(".text").textContent;
    promptForm.dispatchEvent(new Event("submit"));
  });
});


// show/hide controls for mobile on prompt input focus 

document.addEventListener("click", ({ target }) => {
  const wrapper = document.querySelector(".prompt-wrapper");
  const shouldHide = target.classList.contains(".prompt-input") || (wrapper.classList.contains("hide-controls") && (target.id === "add-file-btn" || target.id === "stop-response-btn"));
  wrapper.classList.toggle("hide-controls", shouldHide);
});

// toggle dark/light theme 
themeToggle.addEventListener("click", () => {
 const isLigthTheme =  document.body.classList.toggle("light-theme");
 localStorage.setItem("themeColor", isLigthTheme ? "light_mode" : "dark_mode");
  themeToggle.textContent = isLigthTheme ? "dark_mode" : "light_mode";
});


// set initial theme from local storage
const isLigthTheme =  localStorage.getItem("themeColor") === "light_mode";
document.body.classList.toggle("light-theme", isLigthTheme)
 themeToggle.textContent = isLigthTheme ? "dark_mode" : "light_mode";


promptForm.addEventListener("submit", handleFormSubmit);
promptForm.querySelector("#add-file-btn").addEventListener("click", () => fileInput.click());

 