/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import { evaluate } from 'mathjs';
import React, { useState } from 'react';

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
];

export const operations = ['+', '-', '*', '/'];
export const equalSign = '=';

const Calculator = () => {
  const [value, setValue] = useState('');

  const createHandleClick = op => setValue(value.concat(op));

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {
          rows.map((row, index) => {
            return (
              <div key={index} role='row'>
                {
                  row.map(number => {
                    return (
                      <button onClick={() => createHandleClick(number)} key={number}>
                        {number}
                      </button>
                    )
                  })
                }
              </div>
            )
          })
        }
        {
          operations.map(operation => {
            return (
              <button onClick={() => createHandleClick(operation)} key={operation}>
                {operation}
              </button>
            )
          })
        }
        <button onClick={() => setValue(evaluate(value))}>
          {equalSign}
        </button>
      </div>
    </section>
  );
}

export default Calculator;
