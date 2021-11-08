module.exports = {
  displayName: 'orion',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/orion',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
