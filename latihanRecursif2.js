// function tangga(num) {
//     if (num === 1) {
//         return '*'
//     } else
//         return (loop(num) + '\n') + tangga(num - 1)

//}

function loop(num) {
    var a = 0

    if (a == num) {
        return '*'
    } else {
        return '*' + loop(a + 1)
    }
}

//console.log(tangga(3))
console.log(loop(2))