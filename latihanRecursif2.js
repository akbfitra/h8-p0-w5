function tangga(num) {
    var z = 0
    if (num === z) {
        return '*'
    } else
        z++
        return (loop(num) + '\n') + tangga(num - 1)

}

function loop(num) {
    var a = 0
    if (a == num) {
        return '*'
    } else {
        a++
        return '*' + loop(num - 1)
    }
}

console.log(tangga(3))
console.log(loop(5))