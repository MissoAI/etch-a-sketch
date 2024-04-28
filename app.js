
let etch = document.getElementById("etch");
etch.style.height = "300px";
etch.style.width = "300px";

let grid = document.getElementsByClassName("grid");

for (let i = 0; i < 120; i++) {
 let sketch = document.createElement("div");

 sketch.className = "grid";
 sketch.style.height = "29px";
 sketch.style.width = "30px";

 etch.append(sketch);

 sketch.addEventListener("mouseenter", () => {
   sketch.style.backgroundColor = "Red";
 });

 etch.addEventListener("mouseleave", () => {
   sketch.style.backgroundColor = "white";
 });
}
