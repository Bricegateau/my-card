/*--- const ---*/
//const tel = document.querySelector(".tel");
const a = document.querySelector(".a");
let id = document.getElementById("id-iden");
const body = document.body;
/*--- function ---*/
a.addEventListener("click", () => {
  id.classList.toggle("iden-contacte");
  body.style.backgroundColor = "blue";
  id = [];
});
