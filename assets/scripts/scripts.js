function mouseOverHobbie() {
        document.getElementById("dynamic-container").style.display = "block";
        document.getElementById("hobbie-card-title").textContent = this.alt;
        document.getElementById("hobbie-card-text").textContent = this.dataset.text;
}

function mouseLeaveHobbie() {
    document.getElementById("dynamic-container").style.display = "none";
}

function mouseOverLinks () {
    this.style.backgroundColor = "#FF4E88";
    this.style.color = "#FFFFFF";
}

function mouseLeaveLinks () {
    this.style.backgroundColor = "#FEFEFE";
    this.style.color = "#FF4E88";
}

function loadEvents() {
    for (area of document.querySelectorAll("area")) {
        area.addEventListener("mouseenter", mouseOverHobbie);
        area.addEventListener("mouseleave", mouseLeaveHobbie);
    };

    for (proyectLink of document.getElementsByClassName("project-card-link")) {
        proyectLink.addEventListener("mouseover", mouseOverLinks)
        proyectLink.addEventListener("mouseleave", mouseLeaveLinks)
    }
}

window.addEventListener("load", loadEvents);