const wordAnalizer = document.querySelector('#wordAnalizer');
const resultado = document.querySelector('#resultado');
const bChecar = document.querySelector('#bChecar');
const bClear = document.querySelector('#bClear');

// Coloca o foco no input ao carregar a página
window.onload = function () {
    wordAnalizer.focus();
};

// Permite apertar o Enter para acionar a checagem
wordAnalizer.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        bChecar.click();
    }
});

bClear.addEventListener('click', () =>{
    wordAnalizer.value = '';
    wordAnalizer.focus();
});

bChecar.addEventListener('click', () => {
    const entradaOriginal = wordAnalizer.value.trim();

    if (entradaOriginal === '') {
        alert('🤦‍♂️ Por favor, preencha a palavra ou frase para análise!');
        return;
    }

    // Normalização e limpeza
    let analizer = entradaOriginal
        .toLowerCase()
        .normalize("NFD")                            // remove acentos
        .replace(/[\u0300-\u036f]/g, "")            // remove marcas de acento
        .replace(/[^a-z0-9]/gi, '');                // remove espaços, pontuações etc

    let wordReverse = analizer.split('').reverse().join('');

    if (analizer === wordReverse) {
        resultado.textContent = `😊 A palavra ou frase: "${entradaOriginal}" é um palíndromo!`;
    } else {
        resultado.textContent = `😥 A palavra ou frase: "${entradaOriginal}" não é um palíndromo.`;
    }
});
