const btnPlay = document.querySelector("#clock-play");
const btnStop = document.querySelector("#clock-stop");
let temporeloj;

btnPlay.addEventListener("click", () => {
  let tiempo = "";
  temporeloj = setInterval(() => {
    let tiempo = new Date().toLocaleTimeString();
    document.querySelector("#clock").innerHTML = `<h3>${tiempo}</h3>`;
  }, 1000);
});

btnStop.addEventListener("click", () => {
  clearInterval(temporeloj);
  document.querySelector("#clock").innerHTML = null;
});
