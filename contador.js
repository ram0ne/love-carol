const dataInicial = new Date('2025-05-20T00:09:00');

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicial;

    const segundosTotais = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundosTotais / (3600 * 24));
    const horas = Math.floor((segundosTotais % (3600 * 24)) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    const contador = document.getElementById('contador-tempo');
    if (contador) {
        contador.innerHTML = 
            `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    }
}

setInterval(atualizarContador, 1000);
atualizarContador();
