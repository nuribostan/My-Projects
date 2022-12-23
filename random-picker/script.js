const textarea = document.getElementById('textarea');
const tags = document.getElementById('tags');

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 100)
    randomSelect();
  }
})

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const ramdomPick = pickRandomTag();
    highlightTag(ramdomPick);

    setTimeout(() => {
      unHighlightTag(ramdomPick);
    }, 100)
  }, 100)


  setTimeout(() => { 
    clearInterval(interval);
    setTimeout(() => {
      const ramdomPick = pickRandomTag();
      highlightTag(ramdomPick);
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags2 = document.querySelectorAll(".tag");
  return tags2[Math.floor(Math.random() * tags2.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}

function createTags(e) {
  const input = e.target.value;
  const tagsArray = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());

  tags.innerHTML = "";

  tagsArray.forEach((element) => {
    const tag = document.createElement("span");
    tag.classList.add("tag");
    tag.innerText = element;
    tags.appendChild(tag);

  })
}


