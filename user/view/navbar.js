document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    header.innerHTML = `
    <div id="root">
    <nav id="navbar" class="fixed w-full bg-emerald-900 oklch(0.984 0.014 0.72) text-white z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="text-xl font-bold">PlantCare</div>
                </div>
                
                <!-- Desktop Menu -->
                <div class="hidden md:block">
                    <div class="ml-10 flex items-center space-x-6">
                    <a href="#hero" class="hover:text-green-400 transition-colors">Home</a>
                        <a href="#services" class="hover:text-green-400 transition-colors">Services</a>
                        <a href="#expertAdvice" class="hover:text-green-400 transition-colors">Care Tips</a>
                        <a href="#contact" class="hover:text-green-400 transition-colors">Contact</a>
                    </div>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-neutral-900">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#services" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">Services</a>
                <a href="#expertAdvice" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">Care Tips</a>
                <a href="#consultation" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">Consultation</a>
                <a href="#contact" class="block px-3 py-2 hover:bg-neutral-700 rounded-md">Contact</a>
            </div>
        </div>
    </nav>
    </div>`

    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.add('hidden');
        });
    });
    
    // Add smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });   


    // ... (Navbar JavaScript - same as before) ...
});

