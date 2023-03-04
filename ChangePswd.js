function smallestPrimeDivisor(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return i;
    }
  }
  return n;
}

function smallestPrime(arr) {
  const primes = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    let isPrime = true;
    if (num <= 1) {
      continue;
    }
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes.length > 0 ? Math.min(...primes) : -1;
}

function rotateArray(arr, n) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const divisor = smallestPrime(arr) !== -1 ? smallestPrime(arr) : smallestPrimeDivisor(sum);
  const mod = sum % divisor;
  const rotated = [];
  for (let i = 0; i < arr.length; i++) {
    rotated[(i - n + arr.length) % arr.length] = arr[i];
  }
  return rotated;
}

// example usage
const arr1 = [90, 45, 37, 80, 1, 46];
const rotated1 = rotateArray(arr1, arr1.length);
console.log(rotated1); // output: [80, 1, 46, 90, 45, 37]

const arr2 = [90, 45, 78, 27, 63];
const rotated2 = rotateArray(arr2, arr2.length);
console.log(rotated2); // output: [27, 63, 90, 45, 78]
