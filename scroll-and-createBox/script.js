const boxes = document.querySelectorAll(".box");
const container = document.querySelector(".container");



window.addEventListener("scroll", checkBoxes,activeBox);


function checkBoxes(){
    if(window.scrollY > 250){
        var new_div = document.createElement("div");
        new_div.className = "box";
        new_div.innerText = "CONTENT";
        container.append(new_div);
    }
}
activeBox();

const boxs = document.querySelectorAll(".box");

function activeBox() {
    boxes.forEach((box) => {
      box.classList.add("box-active");
    })
}




