// Mouse Scroll
document.addEventListener("DOMContentLoaded", function () {
    let scrollButton = document.getElementById("scrollButton");
    let targetDiv = document.getElementById("targetDiv");
    scrollButton.addEventListener("click", function () {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    });
});
// variables
let seatCount = 0;
let availableSeat = 40;
let totalPrice = 0;
let coupon = 0;
let grandPrice = 0;

//   Select Seat
const allSeat = document.getElementsByClassName('seatNumber');



// console.log(allSeat)
for (const seat of allSeat) {
    seat.addEventListener('click', function () {
        if (seatCount >= 4) {
            alert("You can't select more than 4 seat.")
            return;
        }
        seat.ad
        seatCount++;
        availableSeat--;
        totalPrice = totalPrice + 550;
        grandPrice = totalPrice;
        document.getElementById('seatCount').innerText = seatCount;
        document.getElementById('availableSeat').innerText = availableSeat;
        document.getElementById('totalPrice').innerText = totalPrice;
        document.getElementById('grandPrice').innerText = grandPrice;


        const classLists = seat.classList;
        classLists.add("bg-[#1dd100]");

        seat.setAttribute('disabled', 'disabled');


        const ticketDetails = document.getElementById('ticketDetails');
        const ticketSeatNum = document.createElement('h3');
        ticketSeatNum.innerText = seat.innerText;
        const ticketDestination = document.createElement('h3');
        ticketDestination.innerText = 'Economy';
        const ticketCost = document.createElement('h3');
        ticketCost.innerText = '550';
        ticketDetails.append(ticketSeatNum);
        ticketDetails.append(ticketDestination);
        ticketDetails.append(ticketCost);

    })
}
const getCoupon = document.getElementById('applyCoupon');
getCoupon.addEventListener('click', applyCoupon);
let couponMessage = '';
let discountAmount = 0;
function applyCoupon() {
    const couponCode = document.getElementById('discount').value;
    if (seatCount === 4) {
        if (couponCode === "NEW15") {
            coupon = 0.15;
            discountAmount = totalPrice * 0.15;
            couponMessage = ("Your discount amount : " + discountAmount);
        } else if (couponCode === "Couple 20" || couponCode === "Couple20") {
            coupon = 0.2;
            discountAmount = totalPrice * 0.2;
            couponMessage = ("Your discount amount : " + discountAmount);
        }
        else {
            couponMessage = "Invalid Coupon";
        }
    } else {
        couponMessage = "Coupon applied for 4 seats. "

    }
    grandPrice = totalPrice - totalPrice * coupon;
    document.getElementById('grandPrice').innerText = grandPrice;
    document.getElementById('couponMessage').innerText = couponMessage;

    document.getElementById("applyCoupon").parentElement.classList.add('hidden');
}


// submit Contact Form

function hideContent(ID) {
    document.getElementById(ID).classList.add("hidden");
}

function showContent(ID) {
    document.getElementById(ID).classList.remove("hidden");
}


const contactPage = document.getElementById('submitContactForm');
contactPage.addEventListener('click', function () {

    const contact_Name = document.getElementById('contactName').value;
    const contact_Phone = document.getElementById('contactPhone').value;
    const contact_Email = document.getElementById('contactEmail').value;
    if (seatCount > 0 && contact_Name !== '' && contact_Phone !==  0 && contact_Email !== '') {
        hideContent('homePage');
        showContent('confirmationPage');
        
    }
})



