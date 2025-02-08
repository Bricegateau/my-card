/*--- const ---*/
const ul = document.querySelector("ul");
const tel = document.getElementById("tel");

/*--- function ---*/
ul.addEventListener("click", () => {
  tel.style.visibility = "visible";
});
