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
