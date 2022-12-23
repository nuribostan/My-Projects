const btn = document.getElementById("btn");
const input = document.getElementById("input");


btn.addEventListener("click", () => {
  input.classList.toggle("input-active");
  input.focus();
  input.value = "";
})