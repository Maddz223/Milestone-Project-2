// jest.config.js
export default {
      testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./src/setupTests.js'],
    moduleFileExtensions: ['js', 'jsx'],
};