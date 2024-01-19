module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/dist/tests/**/*.js"],
  setupFiles: ["./jest.setup.cjs"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
