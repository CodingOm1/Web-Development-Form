var cursor = document.querySelector(".cursor");
var pageContent = document.querySelector(".page1");
var links = document.querySelectorAll("#links") 
var input = document.querySelectorAll("input") 
var btn = document.querySelectorAll("button") 
var form = document.querySelector(".form-container")

pageContent.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y
    });
    
});
pageContent.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3, // Duration of the animation
        ease: "power2.out" // Easing function for smoothness
    });
});

pageContent.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3, // Duration of the animation
        ease: "power2.out" // Easing function for smoothness
    });
});
// Wait for the page to be fully loaded
window.onload = function() {
    // Select the text element you want to animate
    var textElement = document.querySelector(".haeding");

    // Animate the text using GSAP
    gsap.from(textElement, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power4.out"
    });
    gsap.from(form, {
        opacity: 0,
        x: 50,
        duration: 1.5,
        ease: "power4.out"
    });
};


function resizeCursor(size) {
    gsap.to(cursor, {
        width: size + "vw",
        height: size + "vw",
        duration: 0.3, // Adjust duration for desired smoothness
        ease: "power2.out" // Adjust ease for desired animation style
    });
}

// Loop through each link to add event listeners
links.forEach(function(link) {
    link.addEventListener("mouseenter", function() {
        // Resize cursor smoothly when hovering over a link
        resizeCursor(5); // Adjust size as needed
    });
    link.addEventListener("mouseleave", function() {
        // Restore cursor size smoothly when leaving link
        resizeCursor(7); // Adjust size as needed
    });
});
input.forEach(function(input) {
    input.addEventListener("mouseenter", function() {
        // Resize cursor smoothly when hovering over a input
        resizeCursor(5); // Adjust size as needed
    });
    input.addEventListener("mouseleave", function() {
        // Restore cursor size smoothly when leaving input
        resizeCursor(7); // Adjust size as needed
    });
});
btn.forEach(function(button) {
    button.addEventListener("mouseenter", function() {
        // Resize cursor smoothly when hovering over a button
        resizeCursor(5); // Adjust size as needed
    });
    button.addEventListener("mouseleave", function() {
        // Restore cursor size smoothly when leaving button
        resizeCursor(7); // Adjust size as needed
    });
});

// Select elements

const inputFields = document.querySelectorAll("#inputField");
inputFields.forEach(function(inputField) {
    inputField.addEventListener("input", function() {
        if (inputField.value.trim() === "") {
            inputField.classList.remove("valid");
            inputField.classList.add("invalid");
        } else {
            inputField.classList.remove("invalid");
            inputField.classList.add("valid");
        }
    });
})




