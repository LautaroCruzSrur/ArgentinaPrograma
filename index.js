const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_actived");
});

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const descripcion = document.getElementById("descripcion");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  parrafo.innerHTML = "";
  if (nombre.Valuelength < 6) {
    warnings += `El nombre no es valido <br>`;
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El Email no es valido <br>`;
    entrar = true;
  }
  if (asunto.value.length < 5) {
    warnings += `El asunto es muy corto <br>`;
    entrar = true;
  }
  if (descripcion.value.length < 20) {
    warnings += `La descripcion es muy corta <br>`;
    entrar = true;
  }
  if ((entrar = true)) {
    parrafo.innerHTML = warnings;
  }
});
function mostrarImagen() {
  document.getElementById("ventanaEmergente").style.display = "block";
}
window.onclick = function (event) {
  if (event.target == document.getElementById("ventanaEmergente")) {
    document.getElementById("ventanaEmergente").style.display = "none";
  }
};
window.addEventListener("scroll", function () {
  var header = document.querySelector(".box-nav");
  header.classList.toggle("abajo", window.scrollY > 0);
});

function cambiarCSS() {
  var stylesheet = document.getElementById("stylesheet1"); // obtener elemento de enlace
  if (stylesheet.getAttribute("href") == "css/style.css") {
    stylesheet.setAttribute("href", "css/style2.css"); // cambiar el valor del atributo href
    localStorage.setItem("modo-nocturno", "true"); // guardar el modo nocturno en localStorage
  } else {
    stylesheet.setAttribute("href", "css/style.css"); // cambiar el valor del atributo href
    localStorage.setItem("modo-nocturno", "false"); // guardar el modo diurno en localStorage
  }
}

var modoNocturno = localStorage.getItem("modo-nocturno");

if (modoNocturno == "true") {
  var stylesheet = document.getElementById("stylesheet1");
  stylesheet.setAttribute("href", "css/style2.css");
}

const boton = document.querySelector('.boton-modo');

boton.addEventListener('click', function() {
  boton.style.display = 'none';
});
