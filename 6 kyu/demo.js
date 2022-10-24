let n = 39;
while (n > 10) {
  n = Array.from(String(n), Number).reduce((a, b) => a * b);
}

console.log(n);

console.log(`${n}` == n.toString())