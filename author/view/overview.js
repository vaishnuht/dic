document.addEventListener('DOMContentLoaded', ()=>{
    const overview=document.getElementById('overview');
    overview.innerHTML=`
    <div class='root'>
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <!-- Total Queries Card -->
        <div class="bg-white p-6 rounded-lg border border-neutral-200/20">
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-sm text-gray-600">Total Queries</p>
                    <h3 class="text-2xl font-bold text-gray-800">2,451</h3>
                </div>
                <div class="p-3 bg-green-50 rounded-lg">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                </div>
            </div>
        </div>
    
        <!-- Pending Queries Card -->
        <div class="bg-white p-6 rounded-lg border border-neutral-200/20">
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-sm text-gray-600">Pending</p>
                    <h3 class="text-2xl font-bold text-gray-800">145</h3>
                </div>
                <div class="p-3 bg-yellow-50 rounded-lg">
                    <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
            </div>
        </div>
    
        <!-- Resolved Queries Card -->
        <div class="bg-white p-6 rounded-lg border border-neutral-200/20">
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-sm text-gray-600">Resolved</p>
                    <h3 class="text-2xl font-bold text-gray-800">2,306</h3>
                </div>
                <div class="p-3 bg-blue-50 rounded-lg">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Recent Queries Section -->
    <div class="bg-white rounded-lg border border-neutral-200/20 p-6">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg font-semibold text-gray-800">Recent Queries</h2>
            <button class="text-sm text-green-600 hover:text-green-700">View all</button>
        </div>
        
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead>
                    <tr class="text-left border-b border-neutral-200/20">
                        <th class="pb-3 text-sm font-medium text-gray-600">Client</th>
                        <th class="pb-3 text-sm font-medium text-gray-600">Query Type</th>
                        <th class="pb-3 text-sm font-medium text-gray-600">Date</th>
                        <th class="pb-3 text-sm font-medium text-gray-600">Status</th>
                    </tr>
                </thead>
                <!-- for loop  -->
                <tbody>
                    <tr class="border-b border-neutral-200/20">
                        <td class="py-3">
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <span class="text-green-700 font-medium">SK</span>
                                </div>
                                <span class="ml-2 text-sm text-gray-700">Sarah Kim</span>
                            </div>
                        </td>
                        <td class="py-3 text-sm text-gray-600">Plant Disease</td>
                        <td class="py-3 text-sm text-gray-600">Oct 24, 2023</td>
                        <td class="py-3">
                            <span class="px-2 py-1 text-xs rounded-full bg-yellow-50 text-yellow-700">Pending</span>
                        </td>
                    </tr>
                    <tr class="border-b border-neutral-200/20">
                        <td class="py-3">
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                    <span class="text-blue-700 font-medium">MP</span>
                                </div>
                                <span class="ml-2 text-sm text-gray-700">Mike Parker</span>
                            </div>
                        </td>
                        <td class="py-3 text-sm text-gray-600">Watering Schedule</td>
                        <td class="py-3 text-sm text-gray-600">Oct 24, 2023</td>
                        <td class="py-3">
                            <span class="px-2 py-1 text-xs rounded-full bg-green-50 text-green-700">Resolved</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-3">
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                    <span class="text-purple-700 font-medium">AL</span>
                                </div>
                                <span class="ml-2 text-sm text-gray-700">Amy Liu</span>
                            </div>
                        </td>
                        <td class="py-3 text-sm text-gray-600">Plant Care Tips</td>
                        <td class="py-3 text-sm text-gray-600">Oct 23, 2023</td>
                        <td class="py-3">
                            <span class="px-2 py-1 text-xs rounded-full bg-green-50 text-green-700">Resolved</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
    </div>`
})