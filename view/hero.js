document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero');
    heroSection.innerHTML = `
    
<div id="root">
<section id="hero" class="bg-neutral-900 text-white pt-16 min-h-[70vh] flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="space-y-8 animate__animated animate__fadeInLeft">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Expert Plant Care <span class="text-green-400">Consultation</span>
                </h1>
                <p class="text-lg md:text-xl text-neutral-300">
                    Transform your space with thriving plants. Get personalized advice from our plant care experts and watch your garden flourish.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center">
                        Get Plant Care Advice
                    </a>
                    
                </div>
                <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate__animated animate__fadeInUp">
                <div class="p-4 rounded-lg bg-neutral-800/50">
                    <div class="font-bold text-2xl text-green-400">50+</div>
                    <div class="text-neutral-400">Plant Species</div>
                </div>
                <div class="p-4 rounded-lg bg-neutral-800/50">
                    <div class="font-bold text-2xl text-green-400">95%</div>
                    <div class="text-neutral-400">Growth Success</div>
                </div>
            </div>
            </div>
            
            <div class="relative animate__animated animate__fadeInRight">
                <div class="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden bg-neutral-800 p-8">
                    <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-neutral-900/50 rounded-xl"></div>
                    <div class="relative flex items-center justify-center h-full">
                        <div class="text-center space-y-4">
                            <div class="w-24 h-24 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-full h-full text-green-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                                </svg>
                            </div>
                            <div class="text-lg font-semibold">Expert Plant Care Guidance</div>
                            <p class="text-neutral-400">Upload photos of your plants and get personalized care instructions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       
    </div>
</section>
</div>
    `;
});
