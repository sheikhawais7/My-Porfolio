const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;
document.getElementById("light-mode").style.display = "none"

document.getElementById("loader").style.display = "block"
document.getElementById("main-div").style.display = "none"

setTimeout(() => {
    document.getElementById("main-div").style.display = "block"
    document.getElementById("loader").style.display = "none"
}, 2000)
const nightMode = () => {
    document.getElementById("main").style.backgroundColor = "#6b3297"
    document.getElementById("nav").style.backgroundColor = "white"
    document.getElementById("footer").style.backgroundColor = "white"
    document.getElementById("main").style.color = "white"
    document.getElementById("about").style.color = "white"
    document.getElementById("skills").style.color = "white"
    document.getElementById("projects").style.color = "white"
    document.getElementById("contact").style.color = "white"
    document.getElementById("heading1").style.color = "white"
    document.getElementById("heading2").style.color = "white"
    document.getElementById("heading3").style.color = "white"
    document.getElementById("light-mode").style.display = "block"
    document.getElementById("night-mode").style.display = "none"

}
const lightMode = () => {
    document.getElementById("main").style.backgroundColor = "white"
    document.getElementById("nav").style.backgroundColor = "#6b3297"
    document.getElementById("footer").style.backgroundColor = "#6b3297"
    document.getElementById("main").style.color = "#000"
    document.getElementById("about").style.color = "#6b3297"
    document.getElementById("skills").style.color = "#6b3297"
    document.getElementById("projects").style.color = "#6b3297"
    document.getElementById("contact").style.color = "#6b3297"
    document.getElementById("heading1").style.color = "#6b3297"
    document.getElementById("heading2").style.color = "#6b3297"
    document.getElementById("heading3").style.color = "#6b3297"
    document.getElementById("light-mode").style.display = "none"
    document.getElementById("night-mode").style.display = "block"

}