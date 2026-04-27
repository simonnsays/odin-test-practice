const alphabet = [
  'A','B','C','D','E','F','G','H','I','J',
  'K','L','M','N','O','P','Q','R','S','T',
  'U','V','W','X','Y','Z'
]

const shiftChar = (letter, shift) => {
    let isCapital
    const charRef = alphabet.findIndex(char => letter.toUpperCase() === char)
    if (charRef === -1) return letter

    isCapital = alphabet[charRef] === letter ? true : false
    const newChar = alphabet[(((charRef + shift) - 1) % 26) + 1]

    return isCapital 
    ? newChar
    : newChar.toLowerCase()
}

export const caesarCipher = (str, shift) => {
    const mainStr = str.split('')

    return mainStr.map(char => shiftChar(char, shift)).join('')
}