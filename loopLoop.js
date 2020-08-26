var s = '';
// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
for (i = 10; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);