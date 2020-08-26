var arr = ['a', 1, true];

// print array
// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke ' + (i + 1) + ' adalah ' + arr[i]);
// }

// 1. join
// console.log(arr.join(' - '));

// 2. push dan pop (bekerja pada elemen terakhir)
// arr.push('skak');
// arr.pop('a');
// console.log(arr.join(' - '));

// 3. unshift dan shit (bekerja pada elemen pertama)
// arr.shift();
// console.log(arr.join(' - '));

// 4. splice
// arr.splice(1, 2, 'bayu')
// console.log(arr.join(' - '));

// 5. slice
// var arr1 = ['aa', 'bb', 'cc', 'dd'];
// var arr2 = arr1.slice(3, 4);
// console.log(arr1.join(' - '));
// console.log(arr2.join(' - '));

// 6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var mahasiswa = ['aa', 'bb', 'cc'];
// var cetakAngka = function (e) {
//     console.log(e);
// }
// var cetakMahasiswa = function (e, i) {
//     console.log('Mahasiswa ke ' + (i + 1) + ' adalah : ' + e);
// }

// angka.forEach(cetakAngka);
// mahasiswa.forEach(cetakMahasiswa);

// 7. map
// var angka = [10, 20, 6, 4, 8, 7, 1, 9, 4];

// 8. sort
// angka.sort(function (a, b) {
//     return a - b;
// });
// var angka2 = angka.map(function (e) {
//     return e * 2;
// })
// console.log(angka2.join(' - '))

// 9. filter
var angka = [10, 20, 6, 4, 8, 7, 1, 9, 4];
var angka2 = angka.find(function (x) {
    return x == 100;
});

console.log(angka2);


