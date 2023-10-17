function calculation(maxDigit) {
    // Esta linha define uma função chamada 'calculation' que recebe um número 'maxDigit'.

    const listSumTwentyOne = [];
    // Aqui, criamos uma lista vazia chamada 'listSumTwentyOne' para guardar os números que atendem aos critérios.

    for (let i = 1000; i <= 9999; i++) {
        // Começamos um loop que vai de 1000 a 9999 (todos os números de 4 dígitos).
        
        if (isFourDigitNumber(i, maxDigit)) {
            // Verificamos se a função 'isFourDigitNumber' diz que o número 'i' atende aos critérios.
            
            listSumTwentyOne.push(i);
            // Se atender, adicionamos esse número à nossa lista 'listSumTwentyOne'.
        }
    }

    return listSumTwentyOne.length > 0 ? listSumTwentyOne : null;
    // Finalmente, retornamos a lista de números que atendem aos critérios (se houver algum) ou 'null' se nenhum número for encontrado.
}

function isFourDigitNumber(number, maxDigit) {
    // Aqui definimos outra função chamada 'isFourDigitNumber' que verifica se um número tem 4 dígitos e atende aos critérios.

    const digitSum = Array.from(String(number), Number).reduce((acc, digit) => acc + digit, 0);
    // Somamos os dígitos do número para verificar se a soma é igual a 21.

    return digitSum === 21 && String(number).split('').every(digit => parseInt(digit) <= maxDigit);
    // Verificamos se a soma é igual a 21 e se todos os dígitos do número são menores ou iguais a 'maxDigit'.
}

const maxDigit = 6;
// Definimos o valor de 'maxDigit' como 6.

const result = calculation(maxDigit);
// Chamamos a função 'calculation' com 'maxDigit' e armazenamos o resultado em 'result'.

console.log(result);
// Exibimos o resultado no console.

