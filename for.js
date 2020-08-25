var noAngkot = 1;
var angkotBeroperasi = 3;
var jumlahAngkot = 10;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log('Angkot no. ' + noAngkot + ' tidak beroperasi dengan baik');
}