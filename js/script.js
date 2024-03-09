let navbar = document.getElementById('bar');
let more_text = document.getElementById('more_text');

function bar(){
    navbar.style.display = "flex";
}

function cancel(){
    navbar.style.display = "none";
}

function more(){
    more_text.style.height = "auto";
    more_text.style.webkitTextFillColor = "none";
    // -webkit-background-clip: text;
}

let counter = 0;

function popOut() {
    let text = document.getElementById('tex');
    let down = document.getElementById('down');
    let up = document.getElementById('up');
    text.style.transition = ".3s";
    text.style.display = "block";
    down.style.display = "none";
    up.style.display = "block";
    counter++;
    if (counter%2 == 0) {
        text.style.display = "none";
        down.style.display = "block";
        up.style.display = "none";
    }
}