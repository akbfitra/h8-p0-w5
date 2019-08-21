function split(data, operator) {

    var array = []
    var string1 = ''
    for (var i = 0; i < data.length; i++) {
        if (data[i] !== operator) {
            string1 += data[i]
        } else {
            array.push(string1)
            string1 = ''
        }
    }
    array.push(string1)
    return array
}

console.log(split('I have a dream', ' '))

function splitFor(data) {

    var word = ''
    total = 0
    for (var i = 0; i < data.length; i++) {
        if (data[i] === ' ') {
            if (word) {
                total += 1
                word = ''
            }
        } else if (data.length - 1 === ' ') {
            if (word) {
                total += 1
                word = ''
            }
        }
    }
}