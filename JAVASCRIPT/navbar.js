let screenSizex = window.matchMedia("(max-width: 768px)")
let screenSizey = window.matchMedia("(max-width: 568px)")

function openNavbar() {
    document.getElementById("closeButton").style.display = "block";  // Knappen crossbutton kommer att visas.
    document.getElementById("hamburgerNavbarLinks").style.display = "block";     // Innehållet i hamburgerNavbarLinks visas.
    document.querySelector("body").classList.toggle("active");  // Koden gör så att amn inte kan skrolla när innehållet i hamburgerNavbarLinks visas

    if (screenSizey.matches) {  // Om skärmstorleken är 568px tar hamburgerNavbarLinks 100% av skärmen
        document.getElementById("hamburgerNavbarLinks").style.width = "100%";
    } else if (screenSizex.matches) {
        document.getElementById("hamburgerNavbarLinks").style.width = "40%";    // Om skärmstorleken är 768px tar hamburgerNavbarLinks 60% av skärmen
    }
}

let x = window.matchMedia("(max-width: 768px)")

function closeNavbar() {
    document.getElementById("hamburgerNavbarLinks").style.width = "0%";
    document.getElementById("closeButton").style.display = "none";
    document.getElementById("navButton").style.display = "none";
    document.querySelector("body").classList.toggle("active");

    if (x.matches) {
        document.getElementById("navButton").style.display = "block";
    }
    else {
        document.getElementById("navButton").style.display = "none";
    }
}
