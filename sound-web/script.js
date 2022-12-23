const songs = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const items = ["item1", "item2", "item3", "item4", "item5", "item6"];

songs.forEach((song,idx) => {
  items.forEach((item,idx) => {
    document.getElementById(items[idx]).addEventListener("click",() => {
      pauseSong();
      document.getElementById(songs[idx]).play();
    })
  })
})



function pauseSong(){
  songs.forEach((song) => {
    document.getElementById(song).pause();
  })
}