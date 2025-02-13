document.addEventListener('DOMContentLoaded', () => {
    const expertAdviceSection = document.getElementById('contact');
    expertAdviceSection.innerHTML = `
<div id="root">
    <section id="contact" class="py-20 bg-neutral-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12">
                <div class="animate__animated animate__fadeInLeft">
                <h2 class="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">Get Expert Plant Care Consultation</h2>
                <p class="text-lg text-neutral-600 font-bold mb-8">Share your plant concerns and get personalized advice from our experts</p>
                    <form class="space-y-6" id="contactForm">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-neutral-700 mb-2" id="name">First Name</label>
                                <input type="text" name="firstName" id="firstName" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                                <input type="text" name="lastName" id="lastName" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                            <input type="email" name="email"  id="email" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-neutral-700 mb-2">Contact</label>
                            <input type="tel" name="phone"  id="contact" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" pattern="[0-9]{10}" required>
                        </div>
                        <div>
                        <label class="block text-sm font-medium text-neutral-700 mb-2">Address</label>
                        <input type="text" name="address"  id="address" placeholder="City, State, Country" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                        </div>
                        <div>
                        <label class="block text-sm font-medium text-neutral-700 mb-2">Available Space (in feet)</label>
                        <input type="number" name="length" placeholder="length" id="space" class="space-y-8 animate__animated animate__fadeInRight px-6 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                        <input type="number" name="breadth" placeholder="breadth" id="space" class="space-y-8 animate__animated animate__fadeInRight px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>

                        </div>
                        <div>
                        <label class="block text-sm font-medium text-neutral-700 mb-2">Garden Type</label>
                     <select name="garden" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                        <option value="">Select Garden type</option>
                        <option value="indoor">Indoor</option>
                        <option value="outdoor">Outdoor</option>
                        <option value="succulents">Succulents</option>
                        <option value="herbs">Herbs</option>
                        <option value="hydrophonic">Hydrophonic</option>
                        <option value="vertical">Vertical</option>
                        <option value="other">Other</option>
                     </select>
                        </div>
                        

                     <div>
                        <label class="block text-sm font-medium text-neutral-700 mb-2">Sunlight</label>
                        <select  name="exposure" class="space-y-8 animate__animated animate__fadeInRight px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                           
                            <option value="">Select Daily Sunlight Exposure</option>
                            <option value="full sun" >🌕 Full Sun</option>
                            <option value="partial sun" >🌓 Partial sun</option>
                            <option value="shaded Light" >🌒 Shaded Light</option>
                            <option value="Artificial Light ">💡 Artificial Light</option>
                        </select>

                        <select  name="duration" class="space-y-8 animate__animated animate__fadeInleft px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                        <option value="">Select Duration of Sunlight </option>
                        <option value="<2 hrs" >less than 2 hrs</option>
                        <option value="2-4 hrs" > 2-4 hrs</option>
                        <option value="4-6 hrs" >4-6 hrs</option>
                        <option value="6-8 hrs" >6-8 hrs</option>
                        <option value=">8 hrs" >more than 8 hrs</option>
                        </select>
                     </div>
                     <div>
                        <label class="block text-sm font-medium text-neutral-700 mb-2">Subject</label>
                        <select  name="plantType" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                        <option value="">Select a topic</option>
                        <option value="general inquiry" >General Inquiry</option>
                        <option value="consultation request" >Consultation Request</option>
                        <option value="care support" >Plant Care Support</option>
                        <option value="other" >Other</option>
                        </select>
                     </div>
                     <div>
                       <label class="block text-sm font-medium text-neutral-700 mb-2">Garden Orientation</label>
                         <select  name="orientation" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                              <option value="">Select Your Garden Facing</option>
                             <option value="North-facing" >⬆ North-facing: Receives the least sunlight</option>
                              <option value="East-facing" >➡ East-facing: Gets sunlight in the morning</option>
                             <option value="West-facing" >⬅ West-facing: Gets afternoon sunlight</option>
                                <option value="South-facing" >⬇ South-facing: Gets sunlight most of the day</option>
                
                            </select>
                     </div>
                     <div>
                         <label class="block text-sm font-medium text-neutral-700 mb-2">Garden Purpose</label>
                         <select  name="purpose" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                         <option value="">Select Garden Purpose </option>
                         <option value="Personal Relaxation" >😇 Personal Relaxation(Reading, Meditaion, etc)</option>
                         <option value="Outdoor Dining" >🍽 Outdoor Dining</option>
                         <option value="Gardening" >🌿 Gardening</option>
                          <option value="Small Gatherings" >🎉 Small Gatherings</option>
                          <option value="Fittness And Yoga" >🏋 Fittness And Yoga</option>
                           <option value="other" >🔄 Custom Use</option>
                         </select>
                      </div>
                        <div>
                            <label class="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                            <textarea rows="4" name="description" placeholder="More Specification About Your Garden" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
                        </div>
                        
                       

                        <button type="submit"  class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>

                <div class="space-y-8 bg-neutral-100 p-8 rounded-xl animate__animated animate__fadeInRight  mt-5">
                <div class=" bg-white p-8 rounded-xl shadow-sm" >
                        <div class="flex items-start space-x-4 mt-4">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-800">Expert Analysis</h3>
                                <p class="text-neutral-600">Get detailed analysis from certified plant experts</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4 mt-4">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-800">Quick Response</h3>
                                <p class="text-neutral-600">Get responses within 24 hours</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4 mt-4">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-800">Custom Care Plan</h3>
                                <p class="text-neutral-600">Receive personalized care instructions</p>
                            </div>
                        </div>
                    </div>
                    <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate__animate  mt-5 bg-emerald-100 p-8 rounded-xl shadow-sm">
                <h2 class="text-3xl md:text-4xl font-bold text-green-400 mb-4">Frequently Asked Questions</h2>
                <p class="text-neutral-100 text-lg mb-2"></p>
                <div class="tip-card bg-white rounded-lg shadow-md mb-2">
                <button class="tip-header w-full px-6 py-4 flex justify-between items-center">
                    <h3 class="text-lg font-semibold text-neutral-800">What is the PlantCare Application? </h3>
                    <svg class="w-6 h-6 text-green-500 transform transition-transform tip-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
                <div class="tip-content hidden px-6 py-4 text-neutral-600">
                    <p>It is an online platform helps users manage and care for their plants by providing expert advice, plant identification, disease diagnosis, and personalized care recommendations.</p>
                </div>
            </div>
                <div class="tip-card bg-white rounded-lg shadow-md mb-2">
                <button class="tip-header w-full px-6 py-4 flex justify-between items-center">
                    <h3 class="text-lg font-semibold text-neutral-800"> Does the you provide pest and disease diagnosis? </h3>
                    <svg class="w-6 h-6 text-green-500 transform transition-transform tip-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
                <div class="tip-content hidden px-6 py-4 text-neutral-600">
                    <p>Yes, We provide expert consultation to diagnose and suggest treatments for plant pests and diseases.</p>
                </div>
            </div>

            <div class="tip-card bg-white rounded-lg shadow-md mb-2">
                <button class="tip-header w-full px-6 py-4 flex justify-between items-center">
                    <h3 class="text-lg font-semibold text-neutral-800">Is there a personalized plant recommendation feature?</h3>
                    <svg class="w-6 h-6 text-green-500 transform transition-transform tip-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
                <div class="tip-content hidden px-6 py-4 text-neutral-600">
                    <p> Yes, users can get plant suggestions based on their location, available sunlight, humidity levels, and experience level.</p>
                </div>
            </div>
            <div class="tip-card bg-white rounded-lg shadow-md mb-2">
            <button class="tip-header w-full px-6 py-4 flex justify-between items-center">
                <h3 class="text-lg font-semibold text-neutral-800">Who can use this application?                </h3>
                <svg class="w-6 h-6 text-green-500 transform transition-transform tip-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
            <div class="tip-content hidden px-6 py-4 text-neutral-600">
                <p> Anyone from beginners to experienced gardeners, plant shop owners, landscapers, and indoor plant enthusiasts can benefit from the app</p>
            </div>
        </div>
            </div>                                                                                                                                                                          
        </div>

               
            </div>
        </div>
        `
        document.querySelectorAll('.tip-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const icon = header.querySelector('.tip-icon');
                
                content.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
                
                // Close other open tips
                document.querySelectorAll('.tip-content').forEach(item => {
                    if (item !== content) {
                        item.classList.add('hidden');
                        item.previousElementSibling.querySelector('.tip-icon').classList.remove('rotate-180');
                    }
                });
            });
        });

    `</section>
</div>`
const form=document.getElementById('contactForm');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.querySelector('input[name="firstName"]').value+" "+ document.querySelector('input[name="lastName"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const contact = document.querySelector('input[name="phone"]').value;
            const address=document.querySelector('input[name="address"]').value;
            const description = document.querySelector('textarea[name="description"]').value;
           const area=document.querySelector('input[name="length"]').value +"x"+ document.querySelector('input[name="breadth"]').value +" feet";
           const gardenType = document.querySelector('select[name="garden"]').value;
           const light=document.querySelector('select[name="exposure"]').value+" "+ document.querySelector('select[name="duration"]').value;
           const orientation=document.querySelector('select[name="orientation"]').value;
           const purpose = document.querySelector('select[name="purpose"]').value;
           const formData = {
            customerName: name,
            customerEmail: email,
            customerContact: contact,
            customerAddress: address,
            customerGarden: gardenType,
            customerArea: area,
            customerSpecification: description, // or description, depending on your backend
            lightDuration: light,
            gardenOrientaion:orientation,
            gardenPurpose:purpose
           // Include the message in the form data
        };
        console.log(formData);

           fetch('http://localhost:3000/customer', {  // Replace with your backend endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(async response => {
            if (!response.ok) {
              const err = await response.text();
                throw new Error(`${err}`); // Include status and message
            }
            return response.json();
          })
        .then(data => {
            console.log('Success:', data);
            alert("Form submitted successfully!"); // Or a more user-friendly message
           
            this.reset(); // Clear the form after successful submission
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred during form submission: " + error.message); // More informative error message
        });
           this.reset();
        });
});

  
function submit(){
    alert("Form submitted");
    
}