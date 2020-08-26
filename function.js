function jumlahVolumeDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

function penjumlahan(a, b) {
    var a;
    var b;
    var total = a + b;
    return total;
}

function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var hasil = tambah(1, 2, 3, 4, 5);
alert('Hasilnya adalah : ' + hasil);