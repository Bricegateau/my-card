/*--- const ---*/
const ul = document.getElementById("ul");
const tel = document.querySelector(".tel");
console.log(tel);
/*--- function ---*/
ul.addEventListener("click", () => {
  tel.classList.toggle(".tel");
});
