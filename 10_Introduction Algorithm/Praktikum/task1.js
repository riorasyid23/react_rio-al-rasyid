function isPrime(number) {
  let check = 0;
  for (let i = 2; i < number; i++) {
    if (number % 2 == 0) {
      check++;
      break;
    }
  }
  if (check == 0) {
    console.log(`${number} Adalah bilangan Prima`);
  } else {
    console.log(`${number} Bukan bilangan Prima`);
  }
}

isPrime(3);
isPrime(7);
isPrime(10);
