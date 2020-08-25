while (true) {
    var angka = prompt('Masukkan angka (1/2/3) : ');

    switch (angka) {
        case '1':
            alert('Satu satu aku sayang ibu');
            break;
        case '2':
            alert('Dua dua juga sayang ayah');
            break;
        case '3':
            alert('Tiga tiga sayang adek kakak');
            break;
        case '123':
            alert('Satu dua tiga sayang semuanya');
            break;
        default:
            alert('Goblok!!!');
    }
    angka = null;
}