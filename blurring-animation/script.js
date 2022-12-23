const img = document.getElementById("img");
const loading = document.getElementById("loading");

let load = 0;
let int = setInterval(blurring, 30);

function blurring (){
    load ++;

    if (load > 99) {
        clearInterval(int);
    }

    loading.innerText = load +" %";
    loading.style.opacity = scale (load ,0, 100, 1,0 );
    img.style.filter = `blur(${scale(load, 0, 100, 70, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
