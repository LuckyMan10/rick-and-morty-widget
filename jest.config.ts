export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  verbose: true,
  clearMocks: true,
  collectCoverage: false,
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!src/**/*.d.ts"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  }
};
