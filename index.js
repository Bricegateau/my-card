/*--- const ---*/
const ul = document.getElementById("ul");
const tel = document.querySelector(".tel");
const a = document.querySelector(".a");

/*--- function ---*/
a.addEventListener("click", () => {
  const id = document.querySelector("iden-contacte");
  id.classList.toggle("show-div");
});
