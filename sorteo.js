document.addEventListener("DOMContentLoaded", (e) => {
  draw("#winner-btn", ".player");
});

function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = document.querySelectorAll(selector);
    let random = Math.floor(Math.random() * $players.length);
    let winner = $players[random];
    // console.log($players, random, winner);
    return `El ganador es : ${winner.textContent}`;
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}

//funcion para sacar un ganador de unos comentarios en youtube
// const getWinnerComment = (selector) => {
//   const $players = document.querySelectorAll(selector);
//   ramdom = Math.floor(Math.random() * $players.length);
//   winner = $players[random];
//   return `El ganador es : ${winner.textContent}`;
// };
//ejecutando esta funcion en consola buscando la etiqueta que contenga los comentarios deberia de darnos el ganador este ejemplo fue realizado con un video de youtube. ytd-comment-thread-renderer es una etiqueta html que crea youtube
//getWinnerCommet("ytd-comment-thread-renderer #author-text span")
