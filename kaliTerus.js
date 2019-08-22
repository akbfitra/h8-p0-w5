function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var angkaStr = angka.toString()
    if (angkaStr.length == 1) {
        return angka
    }
    var kali = 1
    for (var i = 0; i < angkaStr.length; i++) {
        kali *= angkaStr[i]
    }
    return kaliTerusRekursif(kali)
}



// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6