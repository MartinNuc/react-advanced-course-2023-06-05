export function divideWithRemainder(a: number, b: number) {
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }

  const result = a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b);
  const remainder = a % b;

  return {
    result,
    remainder,
  };
}
