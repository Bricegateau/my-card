/*--- const ---*/
const ul = document.getElementById("ul");
const tel = document.querySelector(".tel");
console.log(tel);
const a = document.querySelector(".a");

/*--- function ---*/
ul.addEventListener("click", () => {
  tel.classList.toggle(".tel");
});
