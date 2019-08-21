function tangga(num) {
    if (num == 1) {
        return '1'
    } else
        return (loop(num) + '\n') + tangga(num - 1)

}

function loop(num) {
    if (num === 1) {
        return '1'
    } else {
        return num.toString() + loop(num - 1)
    }
}

console.log(tangga(3))