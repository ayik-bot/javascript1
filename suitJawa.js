var tanya = true;
while (tanya) {
    // menangkap pilihan user
    var p = prompt('Silahkan pilih : gajah, semut atau orang');

    // menangkap pilihan komputer
    // generate random bilangan
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';

    // rules
    if (p == comp) {
        hasil = 'seri';
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'memasukkan pilihan yang salah';
    }

    // menampilkan hasil
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya adalah kamu ' + hasil);

    tanya = confirm('lagi?');
}

alert('terimakasih telah bermain');