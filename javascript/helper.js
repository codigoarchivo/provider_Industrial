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

const medio = document.querySelector("#medio");
const reproducir = document.getElementById("reproducir");

function iniciar() {
  reproducir.addEventListener("click", presionar, false);
}
function presionar() {
  if (!medio.paused && !medio.ended) {
    medio.pause();
    medio.setAttribute('poster','newvalue')
    reproducir.style.opacity = 1;
  } else {
    medio.play();
    reproducir.style.opacity = 0;
  }
}
window.addEventListener("load", iniciar, false);
