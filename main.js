function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');//Creamos un arreglo que contenga todas los elemntos
//que contengan la clase .tecla

let contador = 0//inicializamos el contador

while (contador < 9){
   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classList[1];//

   const idAudio = `#sonido_${instrumento}`;
   console.log(idAudio)

   tecla.onclick = function (){
    playSonido(idAudio);
   }; 
   contador = contador + 1;
   
}