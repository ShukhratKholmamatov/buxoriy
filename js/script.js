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