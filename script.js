const listMahasiswa = [
  {
    nama: "Teguh Firmansyah",
    nim: 25,
    umur: 25,
    kelas: "A1",
  },
  {
    nama: "M. Adam",
    nim: 40,
    umur: 24,
    kelas: "A2",
  },
  {
    nama: "Andika",
    nim: 30,
    umur: 26,
    kelas: "A1",
  },
];

const namaMahasiswa = listMahasiswa.map((mahasiswa) => mahasiswa.nama);
console.log(namaMahasiswa);

const mahasiswaA1 = listMahasiswa.filter((mahasiswa) => mahasiswa.kelas == "A1");
console.log(mahasiswaA1);

const kondisiAnd = listMahasiswa[0].nim < 35 && "Kelas A1";
console.log(kondisiAnd);

const kondisiOr = listMahasiswa[0].nim < 35 || "Kelas A2";
console.log(kondisiOr);
