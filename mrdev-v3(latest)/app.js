// Selectors
const mouse = document.querySelector(".cursor");
const nav = document.querySelector("#nav");
const links = document.querySelector("#links");
const header = document.querySelector("header");
const footer = document.querySelector(".footer-links");
const projectWrapper = document.querySelector(".projects-wrapper");
const contactPara = document.querySelector(".contact-text p");
const contactSpan = document.querySelector(".contact-text span");
const contactAnchor = document.querySelector(".contact-text a");
const descriptionPara = document.querySelector(".description p");
const anchor = document.querySelectorAll("a");
const aboutInteraction = document.querySelector(".interaction-container");
const about = document.querySelectorAll("#about");
const projectInteraction = document.querySelector(".interaction-projects");
const projectAnchor = document.querySelectorAll(".projects-wrapper ul li a");
let scrollX = 0;
let scrollY = 0;

// Functions
// Lässt das Cursor Div der Maus nachfahren
function cursorMove(e) {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
};
// Text Animation für die Index Html Seite
function scrollText(e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    links.style.transform = `translate3d(${xAxis}%, 0px, 0px)`;
    links.style.transition = "none";
};
// Reset der Text Funktion
function leaveText() {
    links.style.transform = `translate3d(4.5%, 0px, 0px)`;
    links.style.transition = "all 250ms ease";
}
// Kontrolliert ob sich ein Element im DOM der Seite befindet und blendet sie mit Animation ein
function animationFadeIn(){
    if(document.body.contains(footer)) {
        footer.style.animation = "text-fadeIn 1s";
        footer.style.animationDelay = "1s";
        setTimeout(() => {footer.style.opacity = "1";}, 1200);
    };
    if(document.body.contains(projectWrapper)) {
        projectWrapper.style.animation = "text-fadeIn 1.2s";
        projectWrapper.style.animationDelay = ".7s";
        setTimeout(() => {projectWrapper.style.opacity = "1";}, 1000);
    };
    if(document.body.contains(contactPara, contactSpan, contactAnchor)) {
        contactPara.style.animation = "text-fadeIn 1.2s";
        contactPara.style.animationDelay = ".7s";
        setTimeout(() => {contactPara.style.opacity = "1";}, 1100);
        contactSpan.style.animation = "text-fadeIn 1.2s";
        contactSpan.style.animationDelay = ".7s";
        setTimeout(() => {contactSpan.style.opacity = "1";}, 1700);
        contactAnchor.style.animation = "text-fadeIn 1.2s";
        contactAnchor.style.animationDelay = "1.3s";
        contactAnchor.style.opacity = "1";
    };
    if(document.body.contains(descriptionPara)) {
        descriptionPara.style.animation = "text-fadeIn 1.2s";
        descriptionPara.style.animationDelay = ".7s";
        setTimeout(() => {descriptionPara.style.opacity = "1";}, 1000);
    };
};
// Hover Funktion für About
function interactionHover(e) {
  const item = e.target;
    if(item.id === "hover1") {
      aboutInteraction.style.background = "url(img/marcel.jpg) no-repeat center / cover";
      aboutInteraction.style.opacity = "1";
    }
    else if(item.id === "hover2") {
        aboutInteraction.style.background = "url(img/passion.jpg) no-repeat center / cover";
        aboutInteraction.style.opacity = "1"; 
    }
    else if(item.id === "hover3") {
        aboutInteraction.style.background = "url(img/mr-logo-circle-white.png) no-repeat center / cover";
        aboutInteraction.style.opacity = "1";
      } 
    else if(item.id === "hover4") {
        // URL einfügen
        aboutInteraction.style.background = "url(img/) no-repeat center / cover";
        aboutInteraction.style.opacity = "1"; 
        
    } else {
        aboutInteraction.style.opacity = "0";
    }
};
// Hover Funktion für die Projekt Seite
function aboutHover(e) {
    const item = e.target;
    if(item === projectAnchor[0]) {
        projectInteraction.style.background = "url(img/ci_banner.jpg) no-repeat center / cover";
        projectInteraction.style.opacity = "1";
    } else {
        projectInteraction.style.opacity = "0";
    }
    // Restliche Hovers einbinden
};
// Function Calls
animationFadeIn();

// Event Listeners
window.addEventListener("mousemove", cursorMove);
window.addEventListener("scroll", cursorMove);
window.addEventListener("mouseover", interactionHover);
window.addEventListener("mouseover", aboutHover);
if(document.body.contains(nav)) {
    nav.addEventListener("mousemove", scrollText);
    nav.addEventListener("mouseleave", leaveText);
};