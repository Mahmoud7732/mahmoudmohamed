var b = document.getElementById("list");
var a = document.getElementById("links").addEventListener("click", myFunction);
var clickCounter = 0;
function myFunction() {
  b.style.display = "block";
  clickCounter++;
  if (clickCounter % 2 == 0) {
    b.style.display = "none";
  }
}
