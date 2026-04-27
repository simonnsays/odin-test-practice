function reverseString (string) {
    let newString = ''

    for (let i = string.length-1 ; i >= 0 ; i--) {
        newString += string.at(i)
    }

    return newString
}
export default reverseString