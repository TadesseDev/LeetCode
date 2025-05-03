function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const m = num1.length, n = num2.length;
  const result = Array(m + n).fill(0);

  // Multiply each digit
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = (+num1[i]) * (+num2[j]);
      const p1 = i + j, p2 = i + j + 1;

      const sum = mul + result[p2];
      result[p2] = sum % 10;
      result[p1] += Math.floor(sum / 10);
    }
    // console.log(result)
  }

  // Skip leading zeros
  let i = 0;
  while (i < result.length && result[i] === 0) i++;

  return result.slice(i).join('');
}
