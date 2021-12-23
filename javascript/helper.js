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

const medio = document.querySelectorAll("#medio");
const reproducir = document.querySelectorAll("#reproducir");

function iniciar() {
  reproducir.forEach((element) => {
    element.addEventListener("click", ({ target }) => {
      medio.forEach((me) => {
        if (!me.paused && !me.ended) {
          me.pause();
          target.style.opacity = 1;
        } else {
          me.play();
          target.style.opacity = 0;
        }
      });
    });
  });
}

window.addEventListener("load", iniciar, false);
