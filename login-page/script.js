const spans = document.querySelectorAll(".email-placeholder");
const spans2= document.querySelectorAll(".password-placeholder");


spans.forEach((span) => {
    span.innerHTML = span.innerText
       .split('')
       .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
       .join('')
})


spans2.forEach((span) => {
    span.innerHTML = span.innerText
       .split('')
       .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
       .join('')
})