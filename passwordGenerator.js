function changeVocals(str) {
    //code di sini
    var huruf = 'abijuvefopABIJUVEFOP'
    var temp = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a' ||
            str[i] == 'i' ||
            str[i] == 'u' ||
            str[i] == 'e' ||
            str[i] == 'o' ||
            str[i] == 'A' ||
            str[i] == 'I' ||
            str[i] == 'U' ||
            str[i] == 'E' ||
            str[i] == 'O') {
            var index = huruf.indexOf(str[i])
            temp += huruf[index + 1]
        } else {
            temp += str[i]
        }
    }
    //temp
    return temp

}

function reverseWord(str) {
    //code di sini
    var reverse = ''
    for (var j = str.length - 1; j >= 0; j--) {
        reverse += str[j]
    }
    //reverse
    return reverse
}

function setLowerUpperCase(str) {
    //code di sini
    lowerUpper = ''
    for (var k = 0; k < str.length; k++) {
        if (str[k] === str[k].toLowerCase()) {
            lowerUpper += str[k].toUpperCase()
        } else {
            lowerUpper += str[k].toLowerCase()
        }
    }

    return lowerUpper
}

function removeSpaces(str) {
    //code di sini

    var string1 = ''
    var string2 = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            string1 += str[i]
        } else {
            string2 += string1
            string1 = ''
        }
    }
    string2 += string1
    return string2
}

function passwordGenerator(name) {
    //code di sini
    if (name.length <= 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'
    var changeStr = changeVocals(name)
    var reverseStr = reverseWord(changeStr)
    var lowerUpperStr = setLowerUpperCase(reverseStr)
    var removeStr = removeSpaces(lowerUpperStr)
    return removeStr
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'