window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const scrollPosition = window.scrollY;
  const halfPage = main.offsetTop + main.offsetHeight / 2; // Calcola la posizione della metà della pagina
  const links = header.querySelectorAll("nav a");

  // Aggiungi la classe "fixed" all'header quando la pagina è stata scrollata oltre la metà
  if (scrollPosition > halfPage) {
    header.classList.add("fixed");
    links.forEach(function (link) {
      link.classList.add("black");
    });
  } else {
    header.classList.remove("fixed");
    links.forEach(function (link) {
      link.classList.remove("black");
    });
  }
});
