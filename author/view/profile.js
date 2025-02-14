document.addEventListener('DOMContentLoaded', ()=>{
    const profile=document.getElementById('profile');
    profile.innerHTML=`
    <!-- Profile Header -->
    <div class="mb-6">
        <h2 class="text-lg font-semibold text-gray-800">Profile</h2>
        <p class="text-sm text-gray-600">Manage your personal information and expertise</p>
    </div>
    
    <!-- Profile Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
            <div class="bg-white border border-neutral-200/20 rounded-lg p-6 mb-6">
                <div class="flex items-center space-x-4 mb-6">
                    <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                        <span class="text-2xl font-medium text-green-700">JD</span>
                    </div>
                    <div>
                        <h3 class="text-xl font-medium text-gray-800">John Doe</h3>
                        <p class="text-sm text-gray-600">Plant Care Specialist</p>
                        <p class="text-sm text-gray-500">Member since October 2023</p>
                    </div>
                </div>
    
                <div class="space-y-4">
                    <div class="flex items-center space-x-2 text-sm text-gray-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <span>john.doe@example.com</span>
                    </div>
                    <div class="flex items-center space-x-2 text-sm text-gray-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <span>+1 (555) 123-4567</span>
                    </div>
                </div>
            </div>
    
            <!-- Expertise Section -->
            <div class="bg-white border border-neutral-200/20 rounded-lg p-6 space-y-6">
                <h3 class="text-md font-medium text-gray-800 mb-4">Areas of Expertise</h3>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Indoor Plants</span>
                    <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Succulents</span>
                    <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Plant Disease</span>
                    <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Organic Gardening</span>
                    <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Plant Nutrition</span>
                </div>
    
                <h4 class="text-sm font-medium text-gray-700 mb-2">Bio</h4>
                <p class="text-sm text-gray-600 mb-4">
                    Experienced plant care specialist with over 5 years of expertise in indoor plant maintenance and disease management. Passionate about helping others create thriving indoor gardens.
                </p>
            </div>
        </div>    
    </div>`
})