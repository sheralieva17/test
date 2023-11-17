//! ----------------------События клавиатуры-------------------------
//? keydown возникает при нажатии клавиши клавиатуры и длится, пока нажата клавиша
// window.addEventListener("keydown", (event)=>{
//     console.log(event)
// })
//? keyup возникает при отпускании клавиши клавиатуры
// window.addEventListener("keyup", (event) => {
//   console.log(event);
// });

//? submit
let form = document.querySelector("form");
let inpForm = document.querySelectorAll("form input");
let btn1 = document.querySelector("#btn1");
let img = document.querySelector("form img");

btn1.addEventListener("click", () => {
  form.style.display = "block";
});
img.addEventListener("click", () => {
  form.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  inpForm.forEach(() => {
    elem.value = "";
  });
  form.style.display = "none";
});

const div = document.createElement("div");
div.textContent = "Бум!";
document.body.appendChild(div);
div.addEventListener("click", function (event) {
  console.log(event.clientX, event.clientY);
});

window.addEventListener("keydown", (event) => {
  document.documentElement.style.backgroundColor = "violet";
});
