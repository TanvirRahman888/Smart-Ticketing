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
        seatCount++;
        availableSeat--;
        totalPrice = totalPrice + 550;
        grandPrice = totalPrice;
        document.getElementById('seatCount').innerText = seatCount;
        document.getElementById('availableSeat').innerText = availableSeat;
        document.getElementById('totalPrice').innerText = totalPrice;
        document.getElementById('grandPrice').innerText = grandPrice;

        const classLists = seat.classList;
        classLists.add("bg-[#1dd100]")
        
        const ticketDetails = document.getElementById('ticketDetails');
        const ticketSeatNum = document.createElement('h3');
        ticketSeatNum.innerText = seat.innerText;
        const ticketDestination = document.createElement('h3');
        ticketDestination.innerText = 'Pabna';
        const ticketCost = document.createElement('h3');
        ticketCost.innerText = '550';
        ticketDetails.append(ticketSeatNum);
        ticketDetails.append(ticketDestination);
        ticketDetails.append(ticketCost);
        // console.log(seat, document.getElementById('ticketDetails').childNodes);

    })
}
const getCoupon = document.getElementById('applyCoupon');
getCoupon.addEventListener('click', applyCoupon); 

function applyCoupon() {
    const couponCode = document.getElementById('discount').value;
    if (couponCode === "NEW15") {
        coupon = 0.15;
    } else if (couponCode === "Couple 20" || couponCode === "Couple20") {
        coupon = 0.2;
    }
    grandPrice = totalPrice - totalPrice * coupon;
    document.getElementById('grandPrice').innerText = grandPrice;
}
