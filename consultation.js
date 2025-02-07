document.addEventListener('DOMContentLoaded', () => {
    const expertAdviceSection = document.getElementById('consultation');
    expertAdviceSection.innerHTML = `
    <div id="root">
    <section id="consultation" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="animate__animated animate__fadeInLeft">
                    <h2 class="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">Get Expert Plant Care Consultation</h2>
                    <p class="text-lg text-neutral-600 mb-8">Share your plant concerns and get personalized advice from our experts</p>
                    
                    <form id="consultationForm" class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                                <input type="text" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                                <input type="text" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                            <input type="email" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-neutral-700 mb-2">Plant Type</label>
                            <select class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                                <option value="">Select plant type</option>
                                <option value="indoor">Indoor Plants</option>
                                <option value="outdoor">Outdoor Plants</option>
                                <option value="succulents">Succulents</option>
                                <option value="herbs">Herbs</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-neutral-700 mb-2">Description of Concern</label>
                            <textarea rows="4" class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required></textarea>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-neutral-700 mb-2">Upload Plant Photo</label>
                            <div class="border-2 border-dashed border-neutral-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                                <input type="file" accept="image/*" class="hidden" id="photoUpload">
                                <label for="photoUpload" class="cursor-pointer">
                                    <svg class="mx-auto h-12 w-12 text-neutral-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p class="mt-2 text-sm text-neutral-600">Click to upload or drag and drop</p>
                                    <p class="text-xs text-neutral-500">PNG, JPG up to 10MB</p>
                                </label>
                            </div>
                        </div>

                        <button type="submit" class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                            Submit Consultation Request
                        </button>
                    </form>
                </div>

                <div class="bg-neutral-50 p-8 rounded-xl animate__animated animate__fadeInRight">
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
                </div>
            </div>
        </div>
    </section>
    </div>
    `
        const form = document.getElementById('consultationForm');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            alert('Thank you for your consultation request. We will get back to you within 24 hours!');
            form.reset();
        });

        const dropZone = document.querySelector('.border-dashed');
        const fileInput = document.getElementById('photoUpload');

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, highlight, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, unhighlight, false);
        });

        function highlight(e) {
            dropZone.classList.add('border-green-500');
        }

        function unhighlight(e) {
            dropZone.classList.remove('border-green-500');
        }

        dropZone.addEventListener('drop', handleDrop, false);

        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            fileInput.files = files;
        }

    // ... (Expert Advice Section JavaScript - same as before) ...
});


