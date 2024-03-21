/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: { '^.+\\.[tj]s$': 'ts-jest' },
  transformIgnorePatterns: ['node_modules/(?!audiomotion-analyzer)'],
};
