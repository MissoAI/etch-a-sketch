// Get the HTML element with the ID of "etch" and set its height and width.
let etch = document.getElementById("etch");
etch.style.height = "300px";
etch.style.width = "300px";

// Get all HTML elements with the class name of "grid".
let grid = document.getElementsByClassName("grid");

// Loop through 120 times to create and style new div elements with the class name of "grid".
for (let i = 0; i < 120; i++) {
 let sketch = document.createElement("div");

 sketch.className = "grid";
 sketch.style.height = "29px";
 sketch.style.width = "30px";

 // Append the newly created "sketch" div element to the "etch" element.
 etch.append(sketch);

 // Add event listeners for "mouseover" and "mouseleave" events to change the background color of the "sketch" div element.
 sketch.addEventListener("mouseenter", () => {
   sketch.style.backgroundColor = "Red";
 });

 etch.addEventListener("mouseleave", () => {
   sketch.style.backgroundColor = "white";
 });
}