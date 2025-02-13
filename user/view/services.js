document.addEventListener('DOMContentLoaded', () => {
    const servicesSection = document.getElementById('services');
    servicesSection.innerHTML = `
    <div id="root">
    <section id="services" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate__animated animate__fadeInUp">
                <h2 class="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Plant Care Services</h2>
                <p class="text-neutral-600 text-lg">Comprehensive care solutions for all your plant needs</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Service Card 1 -->
                <div class="bg-neutral-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp">
                    <div class="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-neutral-800 mb-3">Plant Diagnostics</h3>
                    <p class="text-neutral-600 mb-4">Expert analysis of plant health issues with detailed treatment plans</p>
                    <ul class="space-y-2 text-neutral-600">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Photo analysis
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Disease identification
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Treatment recommendations
                        </li>
                    </ul>
                </div>

                <!-- Service Card 2 -->
                <div class="bg-neutral-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
                    <div class="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-neutral-800 mb-3">Care Consultation</h3>
                    <p class="text-neutral-600 mb-4">Personalized guidance for optimal plant growth and maintenance</p>
                    <ul class="space-y-2 text-neutral-600">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Custom care schedules
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Nutrition planning
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Growth monitoring
                        </li>
                    </ul>
                </div>
                <!-- Service Card 3-->
                <div class="bg-neutral-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
                    <div class="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                    </div>
                    <h3 class="text-xl font-bold text-neutral-800 mb-3">Custom Garden Design Assistance</h3>
                    <p class="text-neutral-600 mb-4">Personalized layout and design for optimal plant growth and aesthetics</p>
                    <ul class="space-y-2 text-neutral-600">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Low-maintenance beautiful Garden  
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            water conservation and native plant selection
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Year-Round Garden Enjoyment
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mt-12 text-center">
                <a href="#contact" class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors animate__animated animate__fadeInUp">
                    Schedule a Consultation
                </a>
            </div>
        </div>
    </section>
</div>
    `;
});