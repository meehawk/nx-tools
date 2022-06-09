// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

// Reading the SWC compilation config and remove the "exclude"
// for the test files to be compiled by SWC
const { exclude: _, ...swcJestConfig } = JSON.parse(fs.readFileSync(`${__dirname}/.lib.swcrc`, 'utf-8'));

export default {
  displayName: 'nx-docker',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['@swc/jest', swcJestConfig],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/nx-docker',
};