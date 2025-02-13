document.addEventListener('DOMContentLoaded', () => {
    const expertAdviceSection = document.getElementById('expert-advice');
    expertAdviceSection.innerHTML = `
    <div id="root">
    <section id="expertAdvice" class="py-20 bg-secondary-400">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate__animated animate__fadeInUp">
                <h2 class="text-3xl md:text-4xl font-bold text-green-400 mb-4">Plant Care Tips</h2>
                <p class="text-neutral-100 text-lg">Professional guidance for healthy and thriving plants</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12">
                <!-- Tips Accordion -->
                <div class="space-y-4 animate__animated animate__fadeInLeft">
                    <div class="tip-card bg-white rounded-lg shadow-md">
                        <button class="tip-header w-full px-6 py-4 flex justify-between items-center">
                            <h3 class="text-lg font-semibold text-neutral-800">Watering Guidelines</h3>
                            <svg class="w-6 h-6 text-green-500 transform transition-transform tip-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        <div class="tip-content hidden px-6 py-4 text-neutral-600">
                            <p>Water deeply and less frequently to encourage strong root growth. Check soil moisture levels before watering and adjust based on season and plant type.</p>
                        </div>
                    </div>

                    <div class="tip-card bg-white rounded-lg shadow-md">
                        <button class="tip-header w-full px-6 py-4 flex justify-between items-center">
                            <h3 class="text-lg font-semibold text-neutral-800">Light Requirements</h3>
                            <svg class="w-6 h-6 text-green-500 transform transition-transform tip-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        <div class="tip-content hidden px-6 py-4 text-neutral-600">
                            <p>Most plants need 6-8 hours of direct sunlight daily. Monitor leaf color and growth patterns to adjust light exposure accordingly.</p>
                        </div>
                    </div>

                    <div class="tip-card bg-white rounded-lg shadow-md">
                        <button class="tip-header w-full px-6 py-4 flex justify-between items-center">
                            <h3 class="text-lg font-semibold text-neutral-800">Soil & Nutrition</h3>
                            <svg class="w-6 h-6 text-green-500 transform transition-transform tip-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        <div class="tip-content hidden px-6 py-4 text-neutral-600">
                            <p>Use well-draining soil mix and fertilize monthly during growing season. Test soil pH regularly for optimal nutrient absorption.</p>
                        </div>
                    </div>
                    <div class="tip-card bg-white rounded-lg shadow-md">
                    <button class="tip-header w-full px-6 py-4 flex justify-between items-center">
                        <h3 class="text-lg font-semibold text-neutral-800">Choose the Right Plants</h3>
                        <svg class="w-6 h-6 text-green-500 transform transition-transform tip-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="tip-content hidden px-6 py-4 text-neutral-600">
                        <p>Select plants that are appropriate for your climate, soil type, and the amount of sunlight your garden receives.</p>
                    </div>
                </div>
                </div>

                <!-- Quick Tips Cards -->
                <div class="grid grid-cols-2 gap-6 animate__animated animate__fadeInRight">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-neutral-800 mb-2">Best Time to Water</h4>
                        <p class="text-sm text-neutral-600">Early morning or late evening for optimal absorption</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-neutral-800 mb-2">Pruning Tips</h4>
                        <p class="text-sm text-neutral-600">Remove dead leaves and stems regularly</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-neutral-800 mb-2">Pest Control</h4>
                        <p class="text-sm text-neutral-600">Natural solutions for common plant pests</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-neutral-800 mb-2">Growth Boosters</h4>
                        <p class="text-sm text-neutral-600">Natural supplements for faster growth</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
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
   
`</div>
    `;

    // ... (Expert Advice Section JavaScript - same as before) ...
});