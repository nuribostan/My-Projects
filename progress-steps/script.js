const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles =document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    console.log(currentActive);

    update();
})

prev.addEventListener("click", () => {
  currentActive--;
  if(currentActive < 1){
      currentActive = 1;
    }
    update();
})

function update(){
    circles.forEach((circle, idx) => {
      if(idx < currentActive){
        circle.classList.add("circle-active");
      }else {
        circle.classList.remove("circle-active");
      }
    })

    const actives = document.querySelectorAll(".circle-active");

    progress.style.width=(((actives.length-1) / (circles.length-1))*90)+ "%";

    if(currentActive > 1 ){
      prev.disabled = false;
    }else if(currentActive == 1){
      prev.disabled = true;
    }

    if(currentActive == circles.length){
      next.disabled = true;
    }else {
      next.disabled = false;
    }
}

