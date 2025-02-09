/*--- const ---*/
const ul = document.getElementById("ul");
const tel = document.querySelector(".tel");

/*--- function ---*/
ul.addEventListener("click", () => {
  tel.classList.toggle(".tel");
});
