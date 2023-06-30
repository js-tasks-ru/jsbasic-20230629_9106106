function factorial(n) {
  // ваш код...
  let c = 1;

  for (let i = 1; i <= n; i++) {
    c *= i;
  }

  return c;
}
