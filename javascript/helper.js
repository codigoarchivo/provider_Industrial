function industry(provider, elmnt, color, text) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "#000";
  }
  document.getElementById(provider).style.display = "block";
  elmnt.style.backgroundColor = color;
  elmnt.style.color = text;
}
document.getElementById("defaultOpen").click();

let slideIndex = 0;
showSlides();
function showSlides() {
  const slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

const medio = document.getElementById("medio");
const botones = document.getElementById("botones");
function iniciar() {
  reproducir = document.getElementById("reproducir");
  reproducir.addEventListener("click", presionar, false);
}
function presionar() {
  if (!medio.paused && !medio.ended) {
    medio.pause();
    reproducir.innerHTML = "Reproducir";
    botones.style.display = "none";
  } else {
    medio.play();
    reproducir.innerHTML = "Pausa";
    botones.style.display = "block";
  }
  botones.style.display = "block";
}
window.addEventListener("load", iniciar, false);
