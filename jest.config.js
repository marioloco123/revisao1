const dotenv = require("dotenv");
dotenv.configDotenv({
  path: ".env.development",
});

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 60000,
  testPathIgnorePatterns: [
    "<rootDir>/.features-gen/",
    "<rootDir>/node_modules/",
  ],
});

module.exports = jestConfig;
