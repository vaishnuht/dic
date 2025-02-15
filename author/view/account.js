document.addEventListener('DOMContentLoaded', ()=>{

    const account=document.getElementById('account');
    account.innerHTML=`
    <div class='root'>
        
    <!--  Header -->
    <div class="mb-6">
        <h2 class="text-lg font-semibold text-gray-800"></h2>
        <p class="text-sm text-gray-600">Manage your account and preferences</p>
    </div>

    <!--  Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Account  -->
        <div class="lg:col-span-2 space-y-6">
            <div class="bg-white border border-neutral-200/20 rounded-lg p-6">
                <h3 class="text-md font-medium text-gray-800 mb-4">Account </h3>
                <form class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input type="text" class="w-full px-4 py-2 border border-neutral-200/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value="John">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input type="text" class="w-full px-4 py-2 border border-neutral-200/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value="Doe">
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" class="w-full px-4 py-2 border border-neutral-200/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value="john.doe@example.com">
                    </div>
                    <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Save Changes</button>
                </form>
            </div>
        <!-- Preferences and Notifications -->
        <div class="space-y-6">
            <div class="bg-white border border-neutral-200/20 rounded-lg p-6">
                <h3 class="text-md font-medium text-gray-800 mb-4">Password</h3>
                <form class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <input type="password" class="w-full px-4 py-2 border border-neutral-200/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input type="password" class="w-full px-4 py-2 border border-neutral-200/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input type="password" class="w-full px-4 py-2 border border-neutral-200/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    </div>
                    <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Update Password</button>
                </form>
            </div>
        </div>
        </div>
    </div>
    </div>
    `
})