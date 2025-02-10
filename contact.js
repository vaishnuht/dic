// import emailer from "./emailer.js";
import emailer from './emailer.js';

document.addEventListener('DOMContentLoaded', () => {
    const expertAdviceSection = document.getElementById('contact');
    expertAdviceSection.innerHTML = `
<div id="root">
    <section id="contact" class="py-20 bg-neutral-50">
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
                            <input type="number" name="contact"  id="contact" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" pattern="[0-9]{10}" required>
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
                            <option value="full sun" >Full Sun</option>
                            <option value="partial" >Partial sun</option>
                            <option value="shade" >shaded Light</option>
                            <option value="Artificial" >Artificial Light</option>
                        </select>

                        <select  name="duration" class="space-y-8 animate__animated animate__fadeInleft px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                        <option value="">Select Duration of Sunlight </option>
                        <option value="<2" >less than 2 hrs</option>
                        <option value="2-4" > 2-4 hrs</option>
                        <option value="4-6" >4-6 hrs</option>
                        <option value="6-8" >6-8 hrs</option>
                        <option value=">8" >more than 8 hrs</option>
                    </select>
                    </div>
                    <div>
                    <label class="block text-sm font-medium text-neutral-700 mb-2">Subject</label>
                    <select  name="plantType" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                    <option value="">Select a topic</option>
                    <option value="general" >General Inquiry</option>
                    <option value="consultation" >Consultation Request</option>
                    <option value="support" >Plant Care Support</option>
                    <option value="other" >Other</option>
                    </select>
                </div>
                <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">Geo Location</label>
                <textarea rows="4" name="location" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
            </div>
                <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">Garden Orientation</label>
                <textarea rows="2" name="orientation" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
            </div>
            <div>
            <label class="block text-sm font-medium text-neutral-700 mb-2">Garden Purpose</label>
            <textarea rows="2" name="purpose" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
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

                <div class="space-y-8 bg-neutral-50 p-8 rounded-xl animate__animated animate__fadeInRight">
                <div class="space-y-6">
                        <div class="flex items-start space-x-4">
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

                        <div class="flex items-start space-x-4">
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

                        <div class="flex items-start space-x-4">
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
                    <div class="bg-white p-8 rounded-xl shadow-sm">
                        <h3 class="text-xl font-semibold text-neutral-800 mb-6">Quick Connect</h3>
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    <p class="text-sm font-medium text-neutral-700">Phone</p>
                                    <p class="text-neutral-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    <p class="text-sm font-medium text-neutral-700">Email</p>
                                    <p class="text-neutral-600">support@plantcare.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</div>`
const form=document.getElementById('contactForm');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            // 1. Gather Form Data (Handling each input individually)
            const name = document.querySelector('input[name="firstName"]').value+" "+ document.querySelector('input[name="lastName"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const contact = document.querySelector('input[name="contact"]').value;
            const address=document.querySelector('input[name="address"]').value;
            const description = document.querySelector('textarea[name="description"]').value;
           const area=document.querySelector('input[name="length"]').value +" "+ document.querySelector('input[name="breadth"]').value;
           const gardenType = document.querySelector('select[name="garden"]').value;
           const light=document.querySelector('select[name="exposure"]').value+" "+ document.querySelector('select[name="duration"]').value;
           const location=document.querySelector('textarea[name="location"]').value;
           const orientation=document.querySelector('textarea[name="orientation"]').value;
           const purpose = document.querySelector('textarea[name="purpose"]').value;
           const formData = {
            customerName: name,
            customerEmail: email,
            customerContact: contact,
            customerAddress: address,
            customerGarden: gardenType,
            customerArea: area,
            customerSpecification: description, // or description, depending on your backend
            lightDuration: light,
           // Include the message in the form data
        };

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
            emailer(formData);
            this.reset(); // Clear the form after successful submission
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred during form submission: " + error.message); // More informative error message
        });
           this.reset();
        });
});

const email=(formData)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure:true,
        port:465,
        auth: {
          user: 'vaishnuht@gmail.com',
          pass: 'ohfzbeqtvqxmmysr'
        }
      });
    


  var mailOptions = {
    from: 'vaishnuht@gmail.com',
    to: 'vaishnuht@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `sfdkhgkhdfk`
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      response.end();
    }
  });

  }
  
function submit(){
    alert("Form submitted");
    
}