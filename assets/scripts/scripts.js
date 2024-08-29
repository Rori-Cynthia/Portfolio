let smallScreen = false;

function mouseOverHobbie() {
    if (smallScreen) {
        document.getElementById("hobbies-introduction-container").style.display = "none";
    }
    document.getElementById("dynamic-container").style.display = "block";
    document.getElementById("hobbie-card-title").textContent = this.alt;
    document.getElementById("hobbie-card-text").textContent = this.dataset.text;
}

function mouseLeaveHobbie() {
    if (smallScreen) {
        document.getElementById("hobbies-introduction-container").style.display = "block";
    }

    document.getElementById("dynamic-container").style.display = "none";
}

function mouseOverLinks() {
    this.style.backgroundColor = "#FF4E88";
    this.style.color = "#FFFFFF";
}

function mouseLeaveLinks() {
    this.style.backgroundColor = "#FEFEFE";
    this.style.color = "#FF4E88";
}

function mouseOverCards() {
    this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
}

function mouseLeaveCards() {
    this.style.boxShadow = "none";
}

function onScrollNav() {
    let scrolledNav = document.getElementById("navbar");
    scrolledNav.style.boxShadow = "0 1px 8px rgba(0, 0, 0, 0.3)";
}

function handleScreenChange(event) {
    smallScreen = event.matches
}

function loadEvents() {
    for (area of document.querySelectorAll("area")) {
        area.addEventListener("mouseenter", mouseOverHobbie);
        area.addEventListener("mouseleave", mouseLeaveHobbie);
    };

    for (proyectLink of document.getElementsByClassName("project-card-link")) {
        proyectLink.addEventListener("mouseenter", mouseOverLinks)
        proyectLink.addEventListener("mouseleave", mouseLeaveLinks)
    };

    for (card of document.getElementsByClassName("project-card")) {
        card.addEventListener("mouseenter", mouseOverCards)
        card.addEventListener("mouseleave", mouseLeaveCards)
    };

    const mediaQuery = window.matchMedia("(max-width: 1319px)");
    mediaQuery.addEventListener('change', handleScreenChange);
    handleScreenChange(mediaQuery);
}

window.addEventListener("load", loadEvents);
window.addEventListener("scroll", onScrollNav);