// function splitFor(data) {
//     var word = ''
//     var total = 0
//     for (var i = 0; i < data.length; i++) {
//         if (data[i] !== ' ') {
//             word += word[i]
//         }
//         if (data[i] == ' ') {
//             if (word) {
//                 total++
//                 word = ''
//             }
//         }
//         if (i == data.length - 1) {
//             if (word) {
//                 total++
//             }
//         }
//     }
//     return total
// }

// console.log(splitFor('I have a dream'))

function splitRecursive(data) {
    // var word = ''
    // var total = 0
    // for (var i = 0; i < data.length; i++) {
    //     if (data[i] !== ' ') {
    //         word += word[i]
    //     }
    //     if (data[i] == ' ') {
    //         total++
    //         word = ''
    //     }
    //     if (i == data.length - 1) {
    //         if (word) {
    //             total++
    //         }
    //     }
    // }
    // return total

    if (!data) return 0
    if (data.length == 1) {
        return 1
    } else {
        if (data[0] !== ' ') {
            return splitRecursive(data.slice(1))
        } else {
            return 1 + splitRecursive(data.slice(1))
        }
    }

}
console.log(splitRecursive('I have a dream'))
console.log(splitRecursive('test'))