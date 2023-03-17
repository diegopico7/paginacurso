const cta = document.getElementById("cta");
const btnCta = document.getElementById("btn-cta");
const vista = document.getElementById("vista");

cta.style.width = "200px";
cta.style.height = "150px";
cta.style.background = "blue";
cta.style.flex = "flex";
cta.style.justifyContent = "center";
btnCta.style.width = "100px";
btnCta.style.height = "50px";
btnCta.style.background = "red";
btnCta.style.textAlign = "center";
vista.style.color = "yellow";
vista.style.textAlign = "center";

btnCta.addEventListener("click", () => {
  console.log(regresiva);

  var regresiva = setInterval(() => {
    cuenta--;

    vista.innerHTML = ` ${cuenta}`;
  }, 1000);

  const clear = document.getElementById("btn-stopp");
  clear.addEventListener("click", () => {
    clearInterval(regresiva);
  });
});
var cuenta = 10;

const reset = document.getElementById("clear-btn");
reset.addEventListener("click", () => {
  cuenta = 10;
  vista.innerHTML = `${cuenta}`;
});
