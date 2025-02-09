/*--- const ---*/
//const tel = document.querySelector(".tel");
const a = document.querySelector(".a");

/*--- function ---*/
a.addEventListener("click", () => {
  let id = document.getElementById("id-iden");
  const body = document.body;
  id.classList.toggle("iden-contacte");
  body.style.backgroundColor = "blue";

  console.log();
});
