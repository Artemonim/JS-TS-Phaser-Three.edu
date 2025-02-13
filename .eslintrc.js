module.exports = {
  root: true, // Make sure ESLint doesn't search further up
  parser: "@typescript-eslint/parser", // Use the TypeScript parser
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended", // Use recommended ESLint rules
    "plugin:@typescript-eslint/recommended", // Use recommended TypeScript rules
  ],
  rules: {
    // Your custom rules can go here (optional)
    // Example: "no-unused-vars": "warn"
  },
};
