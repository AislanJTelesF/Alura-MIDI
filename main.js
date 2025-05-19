function playSound (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function () {
        playSound(idAudio);
    }
    //console.log(contador);

    tecla.onkeydowm = function(evento) {

        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}