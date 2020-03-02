const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morseWords = new Array();
    for (let i = 0; i < expr.length; i += 10) {
        let word = expr[i] + expr[i + 1] + expr[i + 2] + expr[i + 3] + expr[i + 4] + expr[i + 5] + expr[i + 6] +
            expr[i + 7] + expr[i + 8] + expr[i + 9]
        let morse = '';
        for (let i = 0; i < word.length; i += 2) {
            if (Number(word[i] + word[i + 1]) == 10) {
                morse += '.'
            } else {
                if (Number(word[i] + word[i + 1]) == 11) {
                    morse += '-';
                }
            }
        }
        morseWords.push(morse);
    }
    let string = '';
    morseWords.map(el => {
        if (el == '') {
            string += ' ';
        } else {
            string += MORSE_TABLE[el];
        };
    })
    return string;
}

module.exports = {
    decode
}