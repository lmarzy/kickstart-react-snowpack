module.exports = {
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '^~/components/(.*)': '<rootDir>/src/components/$1',
    '^~/config/(.*)': '<rootDir>/src/config/$1',
    '^~/styles/(.*)': '<rootDir>/src/styles/$1',
    '^~/shared/(.*)': '<rootDir>/src/shared/$1',
  },
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/**/*.(test|spec).(ts|tsx|js)'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
