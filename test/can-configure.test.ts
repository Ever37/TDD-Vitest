import { describe, expect, it } from "vitest";

// Exercise: https://2021.adventjs.dev/challenges/23

const canReconfigure = (from, to): boolean => {
  if (typeof from !== 'string') throw new Error('from is not a string');
  if (typeof to !== 'string') throw new Error('to is not a string');

  const isSameLength = from.length === to.length
  if (!isSameLength) return false;

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasSameUniqueLetters) return false;

  const transformation = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const storedLetter = transformation[fromLetter];
    if (storedLetter && storedLetter !== toLetter) return false;
    transformation[fromLetter] = toLetter;
  }
  return true;
};

describe('canReconfigure', (): void => {
  // it('should be a function', (): void => {
  //   expect(canConfigure).toBeTypeOf('function');
  // })

  it('should throw if first parameter is missing', (): void => {
    expect((): void => canReconfigure()).toThrow();
  })

  it('should throw if first parameter is not a string', (): void => {
    expect((): void => canReconfigure(2)).toThrow();
  })

  it('should throw if second parameter is missing', (): void => {
    expect((): void => canReconfigure('a')).toThrow();
  })

  it('should return boolean', (): void => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean');
  })

  it('should return false if strings provided have different length', (): void => {
    expect(canReconfigure('abc', 'de')).toBe(false);
  })

  it('should return false if strings provided have different length even with same unique letters', (): void => {
    expect(canReconfigure('aab', 'ab')).toBe(false);
  })

  it('should return false if strings provided have different number of unique letters', (): void => {
    expect(canReconfigure('abc', 'ddd')).toBe(false);
  })

  it('should return false if strings has different order of transformation', (): void => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false);
  })
})