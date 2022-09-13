# Essay Praktikum

### 2. Problem 2 Rewrite

Kode berikut ini dituliskan tanpa mengikuti kebiasaan-kebiasaan penulisan yang disarankan. Ubahlah penulisan kode berikut menjadi lebih terbaca dan rapi!

```
    class kendaraan {
        var totalroda = 0;
        var kecepatanperjam = 0;
    }
    class mobil extends kendaraan {
        void berjalan(){
            tambahkecepatan(10);
        }
        tambahkecepatan(var kecepatanbaru) {
            kecepatanperjam = kecepatanperjam + kecepatanbaru;
        }
    }
    void main(){
        mobilcepat = new mobil();
        mobilcepat.berjalan();
        mobilcepat.berjalan();
        mobilcepat.berjalan();
        mobillamban = new mobil();
        mobillamban.berjalan();
    }
```

Kode diatas seharusnya ditulis seperti ini :

```
    class Kendaraan {
        constructor(totalRoda, kecepatanPerJam) {
            this.totalRoda = totalRoda;
            this.kecepatanPerJam = kecepatanPerJam;
        }
    }

    class Mobil extends Kendaraan {
        constructor(totalRoda, kecepatanPerJam) {
            super(totalRoda, keceparanPerJam);
        }

        berjalan() {
            return tambahKecepatan(10);
        }
    }

    void main(){
        let mobilCepat = new Mobil();
        mobilCepat.berjalan();
        mobilCepat.berjalan();
        mobilCepat.berjalan();

        let mobilLamban = new Mobil();
        mobilLamban.berjalan();
    }
```
