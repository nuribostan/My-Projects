const open = document.querySelector(".circle-open");
const close = document.querySelector(".circle-close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("nav-active");
})

close.addEventListener("click", () => {
    container.classList.remove("nav-active");
  })