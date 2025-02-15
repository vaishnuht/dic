document.addEventListener('DOMContentLoaded', ()=>{
    const message=document.getElementById('message');
    message.innerHTML=`
    <div class='root'>
    <!-- Inbox Header -->
    <div class="flex justify-between items-center mb-6">
    </div>

    <!-- Message Filters -->

    <!-- Messages List -->
    <div class="space-y-4">
        <!-- Unread Message -->
        <div class="bg-white border border-neutral-200/20 rounded-lg p-4 hover:shadow-sm transition-all">
            <div class="flex items-start justify-between">
                <div class="flex items-start space-x-4">
                    <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span class="text-blue-700 font-medium">JD</span>
                    </div>
                    <div>
                        <div class="flex items-center space-x-2">
                            <h3 class="font-medium text-gray-800">John Doe</h3>
                            <span class="px-2 py-1 text-xs bg-green-50 text-green-700 rounded-full">New</span>
                        </div>
                        <p class="text-sm text-gray-600 mt-1">Having issues with my indoor plants. The leaves are turning yellow...</p>
                        <p class="text-xs text-gray-500 mt-2">2 hours ago</p>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <button class="p-2 text-gray-400 hover:text-gray-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                    </button>
                    <button class="p-2 text-gray-400 hover:text-gray-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-between items-center mt-6">
        <p class="text-sm text-gray-600">Showing 1-3 of 24 messages</p>
        <div class="flex space-x-2">
            <button class="px-4 py-2 text-sm bg-white border border-neutral-200/20 rounded-lg text-gray-600 hover:bg-gray-50">
                Previous
            </button>
            <button class="px-4 py-2 text-sm bg-white border border-neutral-200/20 rounded-lg text-gray-600 hover:bg-gray-50">
                Next
            </button>
        </div>
    </div>
    </div>
    `
})