# Essay Praktikum

### 1. Problem 1 Analysis

Kode berikut ditulis tanpa mengikuti kebiasaan-kebiasaan penulisan yang disarankan. Berapa banyak kesalahan dalam penulisan pada kode tersebut ?. Bagian mana saja terjadi kesalahan tersebut ?. Tuliskan alasan dari tiap kesalahan tersebut !.

```
    class user {
        var id;
        var username;
        var password;
    }

    class userservice {
        user[] users = [];

        user[] getalluser() {
            return users
        }

        user getuserbyid(userid) {
            return users.filter(userid);
        }
    }
```

Kesalahan penulisan pada kode diatas adalah cara penulisan syntax, pendeklarasian variabel, dan function, penulisan variabel class, dan pendeklarasian child class.

- Alasan dari kesalahan penulisan :
  1. Penulisan Syntax `var` seharusnya menggunakan `let` supaya tidak dapat dideklarasi ulang.
  2. Pendeklarasian variabel `id, username, password` seharusnya menggunakan camel case menjadi `id, userName, password`.
  3. Penulisan function `getalluser()` dan `getuserbyid()` seharusnya menggunakan camel case menjadi `getAllUser()` dan `getUserById()`.
  4. Penulisan nama class `user` dan `userservice` seharusnya menggunakan camel case dan diawali dengan huruf kapital menjadi `User` dan `UserService`.
  5. Penulisan child class yang pendeklarasiannya salah, seharusnya menggunakan `extend` dan `constructor` menjadi :
  ```
      class UserService extend User {
          constructor(id, userName, password) {
              super(id, userName, password);
              this.users(id, userName, password);
          }
          getAllUser(){
              return this.users;
          }
          getUserById(userId) {
              return this.users.filter(userId);
          }
      }
  ```
