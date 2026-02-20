// ==============================
// Run script after page loads
// ==============================
document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       Book Ticket Button Logic
    ============================== */
    const bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach((button) => {
        button.addEventListener("click", function () {

            // Prevent multiple clicks
            if (this.classList.contains("booked")) return;

            this.classList.add("booked");
            this.textContent = "✔ Booked";
            this.style.backgroundColor = "#28a745";

            // Small animation effect
            this.style.transform = "scale(1.05)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 200);
        });
    });


    /* ==============================
       Toggle Event Details
    ============================== */
    const detailButtons = document.querySelectorAll(".details-btn");

    detailButtons.forEach((button) => {
        button.addEventListener("click", function () {

            const detailsSection = this.parentElement.querySelector(".details");

            const isVisible = detailsSection.style.display === "block";

            detailsSection.style.display = isVisible ? "none" : "block";
            this.textContent = isVisible ? "View Details" : "Hide Details";
        });
    });


    /* ==============================
       Booking Form Validation
    ============================== */
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const selectedEvent = document.getElementById("eventSelect").value;
        const ticketCount = document.getElementById("tickets").value;

        // Simple email pattern
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!name || !email || !selectedEvent || !ticketCount) {
            alert("Please complete all required fields.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (ticketCount <= 0) {
            alert("Please select at least 1 ticket.");
            return;
        }

        // Success Message
        alert(`Booking Confirmed 🎉\n\nName: ${name}\nEvent: ${selectedEvent}\nTickets: ${ticketCount}`);

        // Reset form
        bookingForm.reset();
    });

});