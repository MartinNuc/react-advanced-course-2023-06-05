import {divideWithRemainder} from './divide-with-remainder';

it('divides two positive numbers', () => {
  const output = divideWithRemainder(10,3);
  expect(output.result).toBe(3);
});

it('divides a positive number by a negative number', () => {
  const output = divideWithRemainder(10,-3);
  expect(output.result).toBe(-3);
})

it('correctly calculates remainder', () => {
  const output = divideWithRemainder(10,3);
  expect(output.remainder).toBe(1);
})

it('throw error when dividing by zero', () =>{
  expect(() => divideWithRemainder(10,0)).toThrow();
})
