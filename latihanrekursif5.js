// var reverse = ''
// for (var j = str.length - 1; j >= 0; j--) {
//     reverse += str[j]
// }
// //reverse
// return reverse

function rekursifReverse(str) {
    if (str.length == 1) {
        return str[str.length - 1]
    }
    //console.log(str[3])
    return str[str.length - 1] + rekursifReverse(str.slice(0, -1))
}

console.log(rekursifReverse('abcd'))