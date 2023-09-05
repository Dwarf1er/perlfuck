const one = "(()=({}.{})=~/()/)";
const zero = "(()=({})=~/^$/)";

function number(n) {
    if (n === 0) {
        return 0;
    }

    const expression = new Array(n).fill(one);
    return expression.join("+");
}

function fromString(s) {
    const chars = s.split("");
    const encodedChars = [];
    let loopCounter = 0;
    chars.forEach((char, index) => {
        const charCode = char.charCodeAt(0);
        encodedChars.push(`chr(${number(charCode)})`);
        if (loopCounter < chars.length - 1) {
            encodedChars.push(".");
        }
        loopCounter += 1;
    });

        return "eval(" + encodedChars.join("") + ");";
}

function convertCode() {
        const perlCode = document.getElementById("perlCode").value;
        const convertedCode = fromString(perlCode);
        document.getElementById("perlfuckCode").value = convertedCode;
}
