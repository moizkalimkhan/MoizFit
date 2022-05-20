/*------------------- Scroll -------------------*/

let scrollUp = window.pageYOffset;

window.onscroll = function () {
    let scrollDown = window.pageYOffset;
    if (scrollUp > scrollDown) {
        document.getElementById("navBar").style.top = "0";

        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("navBar").style.backgroundColor = "Black"
            document.getElementById("screenLogo-NavButton").style.backgroundColor = "Black";
        }

    } else {
        document.getElementById("navBar").style.top = "-100px"
    }

    scrollUp = scrollDown;
}