let a = 5;
let b = "kampus merdeka";
const nama = "Rio";
let terdaftar = false;
let lengkapArr = [a, b, nama, terdaftar];

function perkenalan(){
    let asal = "Indonesia";
    return console.log(
        "Perkenalkan nama saya "
        + nama +
        " nomor urut "
        + a +
        " sekarang sedang mengikuti "
        + b +
        " berasal dari "
        + asal
    );
}

if (terdaftar === false){ //Jawaban Nomor 1 B Mengubah value boolean menjadi false
    console.log(nama+ " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b; // diberi comment supaya program berjalan

// console.log("Asal diakses "+ asal) //Diberi comment supaya program berjalan
console.log("array = "+nama); // Jawaban Nomor 1 D
console.log("a adalah = "+ a);
console.log("b adalah = "+ b);
console.log(lengkapArr[2]); //Jawaban Nomor 1 A
perkenalan(); // Jawaban Nomor 1 C