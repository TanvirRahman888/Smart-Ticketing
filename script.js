// Mouse Scroll
document.addEventListener("DOMContentLoaded", function() {
    // Identify the button and the target div
    var scrollButton = document.getElementById("scrollButton");
    var targetDiv = document.getElementById("targetDiv");
  
    // Attach a click event listener to the button
    scrollButton.addEventListener("click", function() {
      // Scroll to the target div
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    });
  });
// variables
let seatCount=0;
let availableSeat =40;
//   Select Seat
const allSeat =document.getElementsByClassName('seatNumber');
        // console.log(allSeat)
for (const seat of allSeat) {
    seat.addEventListener('click', function (){
        if (seatCount>=4) {
            alert("You can't select more than 4 seat.")
            return;
        }
        seatCount++;
        availableSeat--;
        document.getElementById('seatCount').innerText=seatCount;
        document.getElementById('availableSeat').innerText=availableSeat;
        const classLists=seat.classList;
        classLists.add("bg-[#1dd100]")
        console.log(classLists, document.getElementById('ticketDetails').childNodes);
        const  ticketDetails =document.getElementById('ticketDetails');
        const ticketSeatNum=document.createElement('h3');
        ticketSeatNum.innerText=seat.innerText;
        const ticketDestination=document.createElement('h3');
        ticketDestination.innerText='Pabna';
        const ticketCost=document.createElement('h3');
        ticketCost.innerText='550';
        ticketDetails.append(ticketSeatNum);
        ticketDetails.append(ticketDestination);
        ticketDetails.append(ticketCost);
        
        console.log(seat, document.getElementById('ticketDetails').childNodes);

    })
}