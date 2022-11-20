const listMahasiswa = [
  {
    nama: "Teguh Firmansyah",
    nim: 25,
    umur: 25,
    kelas: "A1",
    tahunLulus: 2022
  },
  {
    nama: "M. Adam",
    nim: 40,
    umur: 24,
    kelas: "A2",
    tahunLulus: 2020
  },
  {
    nama: "Andika",
    nim: 30,
    umur: 26,
    kelas: "A1",
    tahunLulus : 2021
  },
];

const namaMahasiswa = listMahasiswa.map((mahasiswa) => mahasiswa.nama);
console.log(namaMahasiswa);

const mahasiswaA1 = listMahasiswa.filter((mahasiswa) => mahasiswa.kelas == "A1");
console.log(mahasiswaA1);


const kondisiAnd = listMahasiswa[0].tahunLulus >= 2022 && "Fresh Graduated"; //Jika kondisi true, akan mereturn "Fresh Graduate" 
console.log(kondisiAnd); // Fresh Graduate

const kondisiOr = listMahasiswa[1].tahunLulus >= 2022 || "Lulusan Lama"; //Jika kondisi false akan mereturn "Lulusan Lama"
console.log(kondisiOr); // Lulusan Lama
