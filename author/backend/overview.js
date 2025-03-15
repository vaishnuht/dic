window.addEventListener("load", async function () {
    console.log("Window loaded! Fetching data...");

    try {
        const response = await fetch('http://localhost:3000/customer');

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${await response.text()}`);
        }

        const data = await response.json();
        console.log("Data received:", data); // Debugging

        // Ensure elements exist before updating
        const queryCount = document.getElementById("querycount");
        const tableBody = document.getElementById("data");
        const modal = document.getElementById("customerModal");
        const modalContent = document.getElementById("modalContent");

        if (!queryCount || !tableBody || !modal || !modalContent) {
            console.error("Error: Required elements not found in DOM.");
            return;
        }

        // Update stats
        queryCount.innerText = data.length;

        // Populate queries table
        tableBody.innerHTML = ""; // Clear previous data
        data.forEach(query => {
            const row = document.createElement("tr");
            row.classList.add("border-b", "border-neutral-200");

            row.innerHTML = `
                <td class="py-3 text-sm text-gray-700">${query.customerName || "Unknown"}</td>
                <td class="py-3 text-sm text-gray-600">${query.gardenPurpose || "N/A"}</td>
                <td class="py-3 text-sm text-gray-600">${query.customerAddress || "Unknown"}</td>
                <td class="py-3">
                    <select class="status-dropdown" id='status' data-id="${query.id}">
                        <option value="Pending" ${query.customerStatus === "Pending" ? "selected" : ""}>Pending</option>
                        <option value="Ongoing" ${query.customerStatus === "Ongoing" ? "selected" : ""}>Ongoing</option>
                        <option value="Completed" ${query.customerStatus === "Completed" ? "selected" : ""}>Completed</option>
                    </select>
                </td>
                <td class="py-3">
                    <button class="details-btn bg-blue-500 text-white px-3 py-1 rounded" data-id="${query.id}">View Details</button>
                </td>
            `;

            tableBody.appendChild(row);
        });

        // Handle status change
        document.querySelectorAll(".status-dropdown").forEach(dropdown => {
            dropdown.addEventListener("change", async function () {
                const customerId = this.getAttribute("data-id");
                const newStatus = document.getElementById('status').value;

                try {
                    const updateResponse = await fetch(`http://localhost:3000/customer/status/${customerId}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ customerStatus: newStatus })
                    });

                    if (!updateResponse.ok) {
                        throw new Error(`Failed to update status for Customer ID: ${customerId}`);
                    }

                    console.log(`Status updated to ${newStatus} for Customer ID: ${customerId}`);
                } catch (error) {
                    console.error("Update Error:", error);
                    alert("Failed to update status.");
                }
            });
        });

        // Handle "View Details" button
        document.querySelectorAll(".details-btn").forEach(button => {
            button.addEventListener("click", function () {
                const customerId = this.getAttribute("data-id");
                const customerData = data.find(c => c.id == customerId);

                if (customerData) {
                    modalContent.innerHTML = `
                        <h2 class="text-xl font-bold">${customerData.customerName}</h2>
                        <p><strong>Address:</strong> ${customerData.customerAddress || "Unknown"}</p>
                        <p><strong>Phone:</strong> ${customerData.customerPhone || "Not Provided"}</p>
                        <p><strong>Email:</strong> ${customerData.customerEmail || "Not Provided"}</p>
                        <p><strong>Purpose:</strong> ${customerData.gardenPurpose || "N/A"}</p>
                        <p><strong>Status:</strong> ${customerData.customerStatus}</p>
                        <button id="closeModal" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
                    `;
                    modal.style.display = "block";
                }
            });
        });

        // Close modal event
        document.addEventListener("click", function (event) {
            if (event.target.id === "closeModal" || event.target === modal) {
                modal.style.display = "none";
            }
        });

    } catch (error) {
        console.error("Fetch error:", error);
        alert("Failed to load query data: " + error.message);
    }
});
