function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');//Creamos un arreglo que contenga todas los elemntos
//que contengan la clase .tecla
/*
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
   
}*/
for(let contador=0; contador < listaDeTeclas.length; contador++){
    const tecla=listaDeTeclas[contador];
    const instrumento = tecla.classList[1];// guardamos la segunda clase de cada boton en instrumento
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function(){
        playSonido(idAudio);
    };
   
    tecla.onkeydown = function(){
        tecla.classList.add('activa');
}
    tecla.onkeyup = function(){
    tecla.classList.remove('activa');
}


}