/*
Escribir una función que al pasarle un número:
  - Muestra "fizz" si es múltiplo de 3.
  - Muestra "buzz" si es múltiplo de 5.
  - Muestra "fizzbuzz" si es múltiplo de 3 y 5.
  - Muestra el número si no es múltiplo de nínguno de los anteriores.
*/

export const fizzbuzz = (number): number | string => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number');
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number');

  const multiplies = { 3: 'fizz', 5: 'buzz' };
  let output = '';

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]): void => {
      if (number % multiplier === 0) output += word;
    })

  return output === '' ? number : output;
}