document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('navbar');
    header.innerHTML=`
    <div id="root" class="bg-[#E5E7EB]">
    <div class="flex h-screen overflow-hidden">
        <!-- Navigation Sidebar -->
        <nav class="hidden lg:flex w-64 flex-col bg-white border-r border-neutral-200/20">
            <!-- Logo Section -->
            <div class="p-4 border-b border-neutral-200/20">
                <h1 class="text-2xl font-bold text-green-700">PlantCare</h1>
            </div>

            <!-- Navigation Links -->
            <div class="flex-1 py-4">
                <a href="#overview" class="flex items-center px-4 py-2 text-green-700 bg-green-50 mb-1">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    Overview
                </a>
                <a href="#messages" class="flex items-center px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors mb-1">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                    </svg>
                    Messages
                </a>
                <a href="#analytics" class="flex items-center px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors mb-1">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    Analytics
                </a>
            </div>

            <!-- User Profile Section -->
            <div class="p-4 border-t border-neutral-200/20">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <span class="text-green-700 font-medium">JD</span>
                        </div>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-700">John Doe</p>
                        <p class="text-xs text-gray-500">admin@plantcare.com</p>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu Button -->
        <div x-data="{ isOpen: false }" class="lg:hidden">
            <button type="button" 
                    @click="isOpen = !isOpen" 
                    class="fixed top-4 right-4 p-2 rounded-lg bg-white border border-neutral-200/20 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                <svg x-show="!isOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg x-show="isOpen" x-cloak class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Mobile Menu -->
            <div x-show="isOpen" 
                 x-cloak
                 @click.away="isOpen = false"
                 @resize.window="if (window.innerWidth > 1024) isOpen = false"
                 class="fixed inset-0 z-40 bg-neutral-800/80 backdrop-blur-lg lg:hidden"
                 x-transition:enter="transition ease-out duration-100 transform"
                 x-transition:enter-start="opacity-0 scale-95"
                 x-transition:enter-end="opacity-100 scale-100"
                 x-transition:leave="transition ease-in duration-75 transform"
                 x-transition:leave-start="opacity-100 scale-100"
                 x-transition:leave-end="opacity-0 scale-95">
                <!-- Mobile menu content -->
                <div class="fixed inset-y-0 left-0 w-64 bg-white">
                    <!-- Same content as desktop nav -->
                    <div class="p-4 border-b border-neutral-200/20">
                        <h1 class="text-2xl font-bold text-green-700">PlantCare</h1>
                    </div>
                    <!-- Navigation Links -->
                    <div class="py-4">
                        <a href="#overview" class="flex items-center px-4 py-2 text-green-700 bg-green-50 mb-1">
                            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            Overview
                        </a>
                        <!-- Add other mobile menu items similar to desktop nav -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <main class="flex-1 overflow-y-auto bg-[#E5E7EB]">
            <!-- Header -->
            <header class="sticky top-0 z-30 bg-white border-b border-neutral-200/20 p-4">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-semibold text-gray-800">Dashboard</h2>
                    <div class="flex items-center space-x-4">
                        <div class="relative">
                            <input type="search" placeholder="Search..." class="w-64 px-4 py-2 rounded-lg border border-neutral-200/20 focus:outline-none focus:border-green-500">
                        </div>
                        <button class="p-2 text-gray-500 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <MountPoint>



    `
}
);

// Active link handling
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    
    function setActiveLink() {
        const hash = window.location.hash || '#overview';
        links.forEach(link => {
            if(link.getAttribute('href') === hash) {
                link.classList.add('text-green-700', 'bg-green-50');
                link.classList.remove('text-gray-600');
            } else {
                link.classList.remove('text-green-700', 'bg-green-50');
                link.classList.add('text-gray-600');
            }
        });
    }

    window.addEventListener('hashchange', setActiveLink);
    setActiveLink(); // Set initial active link
});