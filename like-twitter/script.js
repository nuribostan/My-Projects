
document.addEventListener("DOMContentLoaded", () => {

  const box = document.querySelectorAll(".box");
  const btn = document.querySelectorAll(".btn");

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  })
})


  
});