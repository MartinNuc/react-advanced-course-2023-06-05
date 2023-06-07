export function doNTimes(fn: (...args: unknown[]) => unknown, n: number) {
  for(let i = 0 ; i < n; i++) {
    fn();
  }
}