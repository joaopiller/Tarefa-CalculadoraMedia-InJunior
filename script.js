function adicionarNota() {
    let input = document.querySelector('.input-numero');
    let nota = document.createElement('p');
    let secao = document.querySelector('.campo-notas');
    let valorNota = Number(input.value);

    if (input.value.trim() === '' || isNaN(valorNota)) {
        alert('Por favor, insira um número.');
        input.value = '';
        return;
    }

    if (valorNota < 0 || valorNota > 10) {
        alert('A nota deve ser um número entre 0 e 10.');
        input.value = '';
        return;
    }

    let numeroNota = secao.querySelectorAll('p').length + 1;
    nota.innerText = "A nota " + numeroNota + " foi " + valorNota;
    secao.append(nota);
    input.value = '';
    somaNotas = somarNotas(somaNotas, valorNota);
}

function somarNotas(somaNotas, valorNota) {
    somaNotas += valorNota;
    return somaNotas;
}

function calcularMedia(somaNotas) {
    let secao = document.querySelector('.campo-notas');
    let quantidadeNotas = secao.querySelectorAll('p').length;
    if (quantidadeNotas == 0) return 0;
    let media = somaNotas / quantidadeNotas;
    return media;
}

let somaNotas = 0;

let adicionar = document.querySelector(".btn-adicionar");
adicionar.addEventListener('click', () => {
    adicionarNota();
});

let calcular = document.querySelector(".btn-calcular");
calcular.addEventListener('click', () => {
    let textoMedia = document.querySelector('.texto-media');
    textoMedia.innerText = "A média é: " + calcularMedia(somaNotas).toFixed(2);
});