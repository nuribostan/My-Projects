const p = document.getElementById("playstation");
const x = document.getElementById("xbox");

p.addEventListener("mouseover",() => {
  p.style.width = "75%";
  x.style.width = "25%";
  p.style.zIndex= "501";
  x.style.zIndex= "500";
})

p.addEventListener("mouseout",() => {
    p.style.width = "50%";
    x.style.width = "50%";
})


x.addEventListener("mouseover",() => {
    x.style.width = "75%";
    p.style.width = "25%";
    p.style.zIndex= "500";
    x.style.zIndex= "501";
  })
  
  x.addEventListener("mouseout",() => {
      p.style.width = "50%";
      x.style.width = "50%";
  })