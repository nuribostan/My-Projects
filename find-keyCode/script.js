const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <div class="bigKey">
      ${e.keyCode}
  </div>

  <div class="key">
      ${e.key == " " ? "Space" : e.key }
      <small>even.key</small>
  </div>

  <div class="key">
      ${e.keyCode}
      <small>event.keyCode</small>
  </div>

  <div class="key">
      ${e.code}
      <small>event.code</small>
  </div>

  `
})