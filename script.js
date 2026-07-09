// =============================
// SEARCH FUNCTION (Cars Page)
// =============================

function searchCars() {
    let input = document.getElementById("searchInput");

    if (!input) return;

    let filter = input.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// =============================
// BOOK TEST DRIVE
// =============================

function bookDrive(){

    alert("✅ Test Drive Booked Successfully!");

}


// =============================
// CONTACT FORM
// =============================

function submitForm(event){

    event.preventDefault();

    alert("✅ Message Sent Successfully!");

    event.target.reset();

}


// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});


// =============================
// BACK TO TOP BUTTON
// =============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =============================
// WELCOME MESSAGE
// =============================

window.onload=function(){

    console.log("Virtual Car Showroom Loaded Successfully");

}