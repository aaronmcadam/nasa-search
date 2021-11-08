module.exports = {
  displayName: 'feature-files',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/feature-files',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
