import { doNTimes } from './do-n-times';

test('it runs 3 times when n is 3', () => {
  // arrange
  const fn = jest.fn();

  // act
  doNTimes(fn, 3);

  // assert
  expect(fn).toHaveBeenCalledTimes(3);
})
