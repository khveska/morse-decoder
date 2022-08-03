const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const LETTER_LENGTH = 10;
    const exprArr = Array.from({ length: Math.trunc(expr.length / LETTER_LENGTH) },
        (_v, i) => expr.substr(i * LETTER_LENGTH, LETTER_LENGTH));
    return exprArr.map((exprLetter) => decodeLetter(exprLetter)).join("");
}

function decodeLetter(letter) {
    if (letter.match(/\*{10}/)) return ' '; //  10 '*' = space
    letter = letter
        .replace(/11/g, '-') // replace 11 with dash
        .replace(/10/g, '.') // replace 10 with dot
        .replace(/0/g, ''); // remove padded zeros
    return MORSE_TABLE[letter] ?? 'NOT_RECOGNISED_LETTER';
}

module.exports = {
    decode,
};
