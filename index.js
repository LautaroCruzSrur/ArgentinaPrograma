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
const parrafo = document.getElementById("warnings")



form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings = "";
  let entrar = false;
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  parrafo.innerHTML= "";
  if(nombre.Valuelength<6){
    warnings += `El nombre no es valido <br>`;
    entrar = true
  }
  if(!regexEmail.test(email.value)){
    warnings += `El Email no es valido <br>`;
    entrar = true
   }
   if(asunto.value.length < 5){
    warnings += `El asunto es muy corto <br>`;
    entrar = true
   }
   if(descripcion.value.length < 20){
    warnings += `La descripcion es muy corta <br>`;
    entrar = true
   }
   if(entrar = true){
    parrafo.innerHTML = warnings;
   }
})
function mostrarImagen() {
  document.getElementById("ventanaEmergente").style.display = "block";
}
window.onclick = function(event) {
  if (event.target == document.getElementById("ventanaEmergente")) {
    document.getElementById("ventanaEmergente").style.display = "none";
  }
}


