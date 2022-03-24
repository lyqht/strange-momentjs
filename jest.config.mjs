/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  modulePaths: ["<rootDir>/src"],
  testRunner: "jest-circus/runner",
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/"
  ],
  watchPathIgnorePatterns: [
    "<rootDir>/jest.*.json",
    "<rootDir>/jest.json"
  ],
};
