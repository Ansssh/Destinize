// design changes

const select = document.getElementById("lang");
const triangle = document.querySelector(".triangle");

let isRotated = false;
select.addEventListener("click", () => {
    if (isRotated) {
        triangle.style.transform = "rotate(0deg)"; // Rotate back to original
    } else {
        triangle.style.transform = "rotate(-180deg)"; // Rotate 180 degrees
    }
    isRotated = !isRotated; // Toggle the rotation state
});

const select2 = document.getElementById("location-select");
const triangle2 = document.querySelector(".triangle2");

select2.addEventListener("click", () => {
    if (isRotated) {
        triangle2.style.transform = "rotate(0deg)"; // Rotate back to original
    } else {
        triangle2.style.transform = "rotate(-180deg)"; // Rotate 180 degrees
    }
    isRotated = !isRotated; // Toggle the rotation state
});


document.querySelector("#question1").addEventListener("click", e => {
    document.querySelector("#answer1").classList.toggle("open");
    document.querySelector("#arrow1").classList.toggle("rotate");
    document.querySelector("#question1").classList.toggle("active")
})

document.querySelector("#question2").addEventListener("click", e => {
    document.querySelector("#answer2").classList.toggle("open");
    document.querySelector("#arrow2").classList.toggle("rotate");
    document.querySelector("#question2").classList.toggle("active")
})

document.querySelector("#question3").addEventListener("click", e => {
    document.querySelector("#answer3").classList.toggle("open");
    document.querySelector("#arrow3").classList.toggle("rotate");
    document.querySelector("#question3").classList.toggle("active")
})

document.querySelector("#question4").addEventListener("click", e => {
    document.querySelector("#answer4").classList.toggle("open");
    document.querySelector("#arrow4").classList.toggle("rotate");
    document.querySelector("#question4").classList.toggle("active")
})

document.querySelector("#question5").addEventListener("click", e => {
    document.querySelector("#answer5").classList.toggle("open");
    document.querySelector("#arrow5").classList.toggle("rotate");
    document.querySelector("#question5").classList.toggle("active")
})