let onSwitch = "Lampu Menyala";
let offSwitch = "Lampu Mati";
function getSwitch(val) {
  for (let i = 1; i <= val; i++) {
    if (val % i == 0) {
      console.log(onSwitch);
    } else {
      console.log(offSwitch);
    }
  }
}
console.log(getSwitch(4));
