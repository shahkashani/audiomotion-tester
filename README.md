# Audiomotion-Analyzer Tester

To replicate the error:

1. Clone this repo
2. `nvm i`
3. `npm i`
4. `npm test`

Note you'll get the following errror:

```javascript
 FAIL  src/index.test.ts
  ● Test suite failed to run

    Cannot find module 'audiomotion-analyzer' from 'src/index.test.ts'

    > 1 | import AudioMotionAnalyzer from 'audiomotion-analyzer';
        | ^
      2 |
      3 | describe('test', () => {
      4 |   it('imports as expected', () => {

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:427:11)
      at Object.<anonymous> (src/index.test.ts:1:1)
```

To fix the error:

1. Edit `node_modules/audiomotion-analyzer/package.json`
2. Update the `exports` field to the below

```json
"exports": {
    ".": {
      "require": "./src/audioMotion-analyzer.js",
      "import": "./src/audioMotion-analyzer.js",
      "types": "./src/index.d.ts"
    }
  },
```

3. Re-run `npm test`