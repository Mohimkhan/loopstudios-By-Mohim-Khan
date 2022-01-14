console.log('welcome');
let menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', openmenu);
function openmenu() {
    let menu = document.getElementById('menu');
    if (menu.style.top = '0%') {
        top = '-9999px';
    }
}

let closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', closemenu);
function closemenu() {
    if (menu.style.top = '-9999px') {
        top = '0%';
    }
}