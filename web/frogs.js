// JavaScript source code

var images = [];
var hovering = [];
var frogs = [];

const frogPeekSpeed = 2.5;
const frogHideSpeed = 1.5;

document.onload = setup();


function hover(event) {
    let className = event.target.className;
    if (className == "animatedLink") {
        let num = event.target.getAttribute("animationID");
        hovering[num] = true;
    }
}

function unhover(event) {
    let className = event.target.className;
    if (className == "animatedLink") {
        let num = event.target.getAttribute("animationID");
        hovering[num] = false;
    }
}

function makeLinkImage() {
    let img = new Image();
    img.src = "frog.png";
    img.setAttribute("draggable", "false");
    images.push(img);
    return img
}

function makeLinkImageDiv() {
    let img = makeLinkImage();
    let div = document.createElement("div");
    div.setAttribute("class", "frog_link");
    div.appendChild(img);
    return div
}

function addImage(link) {
    let div = makeLinkImageDiv();
    link.parentElement.insertBefore(div, link);
} 

function setupLink(link) {
    hovering.push(false);
    frogs.push(55);
    link.addEventListener("mouseover", hover);
    link.addEventListener("mouseout", unhover);
    addImage(link,);
}

function capNum(num, min, max) {
    if (num < min) { num = min; }
    if (num > max) { num = max; }
    return num;
}

function updateLinkImage(i) {
    frogs[i] += hovering[i] ? -frogPeekSpeed : frogHideSpeed;
    frogs[i] = capNum(frogs[i], 15, 55);
    images[i].style.margin = frogs[i] + "% 0 0 0";
}






function setup() {
    animatedLinks = document.getElementsByClassName("animatedLink");
    for (let i = 0; i < animatedLinks.length; i++) {
        setupLink(animatedLinks[i]);
        animatedLinks[i].setAttribute("animationID", i);
    }
    frame();
}

function frame() {
    for (let i = 0; i < hovering.length; i++) {
        updateLinkImage(i);
    }
    window.setTimeout(frame, 10);
}