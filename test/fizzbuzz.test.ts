import { describe, expect, it } from 'vitest';

/*
Escribir una función que al pasarle un número:
  - Muestra "fizz" si es múltiplo de 3.
  - Muestra "buzz" si es múltiplo de 5.
  - Muestra "fizzbuzz" si es múltiplo de 3 y 5.
  - Muestra el número si no es múltiplo de nínguno de los anteriores.
*/

const fizzbuzz = (number): number | 'fizz' => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number');
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number');

  if (number === 3) return 'fizz';
  return number;
}

describe('fizzbuzz', (): void => {
  it('should be a function', (): void => {
    expect(typeof fizzbuzz).toBe('function');
  })

  it('should throw if not number is provided as parameter', (): void => {
    expect((): number => fizzbuzz()).toThrow();
  })

  it('should throw a specific error message if not number is provided as parameter', (): void => {
    expect((): number => fizzbuzz()).toThrow('parameter provided must be a number');
  })

  it('should throw a specific error message not a number is provided', (): void => {
    expect((): number => fizzbuzz(NaN)).toThrow('parameter provided must be a number');
  })

  it('should return 1 if number provided is 1', (): void => {
    expect(fizzbuzz(1)).toBe(1);
  })

  it('should return 2 if number provided is 2', (): void => {
    expect(fizzbuzz(2)).toBe(2);
  })

  it('should return "fizz" if number provided is 3', (): void => {
    expect(fizzbuzz(3)).toBe('fizz');
  })

})