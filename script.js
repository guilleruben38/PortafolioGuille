//detecto el scrolling para aplicar la animacion de la barra de habilidades 
window.onscroll = function () {
    efectoHabilidades()
  };
  
  //funcion que aplica la animacion
  
  function efectoHabilidades(){
    let skills = document.getElementById ("skills")
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
      document.getElementById("cF").classList.add ("barra-progreso1")
      document.getElementById("hA").classList.add ("barra-progreso2")
      document.getElementById("d").classList.add ("barra-progreso3")
      document.getElementById("hbP").classList.add ("barra-progreso4")
  
    }
  }




  