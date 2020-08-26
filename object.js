var pria = {
    nama: "Faris Rachman Hakim",
    umur: 25,
    maskawin: "Seperangkat Alat Sholat",
}

var wanita = {
    nama: "Kiky Supriatna Putri",
    umur: 25,
    maskawin: "Seperangkat Alat Sholat",
}

// function declaration
function buatObject(nama, umur,) {
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    return mhs;
}

// function constructor
function mahasiswa(nama, umur) {
    this.nama = nama;
    this.umur = umur;

}

var penghulu = new mahasiswa("Penghulu", 40);
