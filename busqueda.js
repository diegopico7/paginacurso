document.addEventListener("DOMContentLoaded", (e) => {
  search(".card-filter", ".card1");
});

function search(input, selector) {
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      //buscamos cada letra
      console.log(e.key);
      //vamos completando todas las letras
      console.log(e.target.value);

      //vamos a hacer un condicional si el usuario apreta escape se borra el contenido
      if (e.key === "Escape") {
        e.target.value = "";
      }

      // vamos a buscar los elementos que tengan ese selector, y buscara x cada selector el texto, textContent sera el texto que tienen las clases card1 vamos a forzar q sea todo minuscula luego con el includes ponemos una condicion ternaria a true a false, si da true le sacamos la clase filter y si da false le agregamos la clase filter
      document
        .querySelectorAll(selector)
        .forEach((el) => el.textContent.toLowerCase().includes(e.target.value))
          ? el.classList.remove("filter")
        : el.classList.add("filter");
    }
  });
}
