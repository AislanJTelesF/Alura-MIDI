function playSound (idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < 9) {

    listaDeTeclas[contador].onclick = playSound;

    contador++;

    console.log(contador);
}