var button = document.getElementById("button");

const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    console.log("clicked");
    menu.classList.toggle('active');
})


//For sticky navbar

window.onscroll = function () { myFunction() };

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
