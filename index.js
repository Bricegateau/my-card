/*--- const ---*/
const ul = document.getElementById("ul");
const tel = document.querySelector(".tel");
const a = document.querySelector(".a");

/*--- function ---*/
a.addEventListener("click", () => {
  const id = document.getElementById("id-iden");
  id.classList.toggle("iden-contacte");
});
