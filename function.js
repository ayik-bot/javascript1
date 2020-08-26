function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}

function penjumlahan(a, b) {
    return a + b;
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