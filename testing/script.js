export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split("").reverse().join("")
}

export function calculator(x, y) {
    return {
        add: () => x+y,
        subtract: () => x-y,
        multiply: () => x*y,
        divide: () => {
            if (y === 0) {
              throw new Error('Division by zero is not allowed');
            }
            return x / y;
          }
    }
}

export function caesarCipher(str, shift) {
    let result = ''
    for(let i=0; i<str.length; i++) {
        let charAscii = str[i].charCodeAt()
        let shiftedAscii = charAscii + shift
        if (str[i].match(/[.,:!? ]/)) result+=str[i]
        else if(charAscii >= 97 && charAscii <= 122 && shiftedAscii > 122) result+= String.fromCharCode(shiftedAscii - 122 + 96) //LOWERCASE TEXT WRAPPING
        else if(charAscii >= 65 && charAscii <= 90 && shiftedAscii > 90) result+= String.fromCharCode(shiftedAscii - 90 + 64) //UPPERCASE TEXT WRAPPING
        else result+= String.fromCharCode(shiftedAscii)
    }

    return result
}

export function analyzeArray(arr) {
    return {
        average: () => arr.reduce((a,b) => (a+b), 0) / arr.length,
        minimum: () => Math.min(...arr),
        maximum: () => Math.max(...arr),
        length: () => arr.length
    }
}   