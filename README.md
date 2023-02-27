
### Test Driven Development Course from Scratch with JavaScript, React and Vitest
- Based on https://www.youtube.com/watch?v=_t9l2TwGioc&t=4565s
### https://vitest.dev/guide/

- mkdir aprende-tdd
- cd aprende-tdd
- npm install -D vitest
- npm init -y
- npm install standard -D

### TDD in React proyect

- npm install react react-dom -E
- npm install @vitejs/plugin-react -D
- npm install @testing-library/react happy-dom -D // https://www.npmjs.com/package/happy-dom
- npm install mathjs

### So importante!

package.json:

"scripts": {
  "dev": "vite",
  "test": "vitest",
  "coverage": "vitest run --coverage"
},

"eslintConfig": {
  "extends": "./node_modules/standard/eslintrc.json"
},

### npm run coverage [https://vitest.dev/guide/coverage.html]

 % Coverage report from istanbul
- ----------------|---------|----------|---------|---------|-------------------
- File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
- ----------------|---------|----------|---------|---------|-------------------
- All files       |     100 |      100 |     100 |     100 |                   
- Calculator.jsx |     100 |      100 |     100 |     100 |                   
- fizzbuzz.ts    |     100 |      100 |     100 |     100 |                   
- ----------------|---------|----------|---------|---------|-------------------

 % Coverage report from c8
- ----------------|---------|----------|---------|---------|-------------------
- File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
- ----------------|---------|----------|---------|---------|-------------------
- All files       |   98.82 |      100 |    90.9 |   98.82 |                   
- Calculator.jsx |   98.38 |      100 |   88.88 |   98.38 | 13                
- fizzbuzz.ts    |     100 |      100 |     100 |     100 |                   
- ----------------|---------|----------|---------|---------|-------------------