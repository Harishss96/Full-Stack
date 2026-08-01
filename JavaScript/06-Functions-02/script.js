
const bookBtn = document.getElementById("bookBtn");
const cancelBtn = document.getElementById("cancelBtn");
const summaryBtn = document.getElementById("summaryBtn");


let customerName = "";
let movieName = "";
let ticketPrice = 0;
let ticketQuantity = 0;
let totalAmount = 0;
let bookingStatus = "Not Booked";

function bookMovie() {

    customerName = document.getElementById("customerName").value;
    movieName = document.getElementById("movieName").value;
    ticketPrice = Number(document.getElementById("ticketPrice").value);
    ticketQuantity = Number(document.getElementById("ticketCount").value);

    if (
        customerName === "" ||
        movieName === "" ||
        ticketPrice <= 0 ||
        ticketQuantity <= 0
    ) {
        alert("Please fill all fields.");
        return;
    }

    totalAmount = ticketPrice * ticketQuantity;
    bookingStatus = "Booked Successfully";

    showSummary();

    console.log("BOOKING SUCCESSFUL");
    console.log("Customer :", customerName);
    console.log("Movie :", movieName);
    console.log("Ticket Price :", ticketPrice);
    console.log("Tickets :", ticketQuantity);
    console.log("Total Amount :", totalAmount);
    console.log("Status :", bookingStatus);
}

function cancelBooking() {

    document.getElementById("customerName").value = "";
    document.getElementById("movieName").value = "";
    document.getElementById("ticketPrice").value = "";
    document.getElementById("ticketCount").value = "";

    customerName = "";
    movieName = "";
    ticketPrice = 0;
    ticketQuantity = 0;
    totalAmount = 0;
    bookingStatus = "Booking Cancelled";

    showSummary();

    console.log("BOOKING CANCELLED");
}

function showSummary() {

    document.getElementById("showCustomer").textContent =
        customerName || "----";

    document.getElementById("showMovie").textContent =
        movieName || "----";

    document.getElementById("showTickets").textContent =
        ticketQuantity || "----";

    document.getElementById("showAmount").textContent =
        totalAmount ? `₹${totalAmount.toLocaleString()}` : "----";

    document.getElementById("showStatus").textContent =
        bookingStatus;
}

bookBtn.addEventListener("click", bookMovie);

cancelBtn.addEventListener("click", cancelBooking);

summaryBtn.addEventListener("click", showSummary);
