function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var angkaStr = angka.toString()
        // console.log(angkaStr)
        // if(angkaStr.length == 1){
        //     return angka
        // }
    if (angka.length == 1) {
        return 1
    }
    return angkaStr * kaliTerusRekursif(angkaStr.slice(-1))

}



// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6