document.addEventListener('DOMContentLoaded', ()=>{
    const analytics=document.getElementById('analytics');
    analytics.innerHTML=`
    <div class='root'>
    <!-- Analytics Header -->
    <div class="flex justify-between items-center mb-6">
        <div>
            <h2 class="text-lg font-semibold text-gray-800">Analytics Overview</h2>
            <p class="text-sm text-gray-600">Last 30 days performance</p>
        </div>
        <div class="flex space-x-2">
            <select class="px-4 py-2 bg-white border border-neutral-200/20 rounded-lg text-sm text-gray-600">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 6 months</option>
                <option>Last year</option>
            </select>
            <button class="px-4 py-2 bg-white border border-neutral-200/20 rounded-lg text-sm text-gray-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            </button>
        </div>
    </div>

    <!-- Main Chart -->
    <div class="bg-white border border-neutral-200/20 rounded-lg p-6 mb-6">
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-md font-medium text-gray-800">Query Trends</h3>
            <div class="flex space-x-2">
                <button class="px-3 py-1 text-sm bg-green-50 text-green-700 rounded-lg">Daily</button>
                <button class="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">Weekly</button>
                <button class="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">Monthly</button>
            </div>
        </div>
        <div class="h-80 w-full" id="trendsChart">
            <!-- Chart will be mounted here -->
            <div class="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center">
                <p class="text-gray-500">Loading chart...</p>
            </div>
        </div>
    </div>

    <!-- Statistics Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- Query Types Distribution -->
        <div class="bg-white border border-neutral-200/20 rounded-lg p-6">
            <h3 class="text-md font-medium text-gray-800 mb-4">Query Types Distribution</h3>
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span class="text-sm text-gray-600">Plant Disease</span>
                    </div>
                    <span class="text-sm font-medium text-gray-800">45%</span>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span class="text-sm text-gray-600">Care Tips</span>
                    </div>
                    <span class="text-sm font-medium text-gray-800">30%</span>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                        <span class="text-sm text-gray-600">Plant Selection</span>
                    </div>
                    <span class="text-sm font-medium text-gray-800">25%</span>
                </div>
            </div>
        </div>

        <!-- Response Time Analysis -->
        <div class="bg-white border border-neutral-200/20 rounded-lg p-6">
            <h3 class="text-md font-medium text-gray-800 mb-4">Response Time Analysis</h3>
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Average Response Time</span>
                    <span class="text-sm font-medium text-gray-800">2.5 hours</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Fastest Response</span>
                    <span class="text-sm font-medium text-gray-800">15 minutes</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Slowest Response</span>
                    <span class="text-sm font-medium text-gray-800">8 hours</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white border border-neutral-200/20 rounded-lg p-6">
        
    </div>

    </div>
    `
})