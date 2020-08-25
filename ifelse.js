var input = prompt('Masukkan Nilai : ');
var jumlahAngkot = 10;
var operasi = 6;
var lembur = 8;
var tidakOperasi = jumlahAngkot - operasi;

if (input <= operasi) {
    alert('Angkot no. ' + input + ' beroperasi');
} else if (input > jumlahAngkot) {
    alert('Jumlah angkot anda hanya ' + jumlahAngkot);
} else if (input == lembur) {
    alert('Angkot no. ' + input + ' lembur');
}
else {
    alert('Angkot no. ' + input + ' tidak beroperasi');
}