import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"], // Добавьте .tsx для React
    languageOptions: { globals: { ...globals.browser, ...globals.node } }, // Добавьте node globals
    plugins: {
      "@typescript-eslint": tseslint,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"], // Важно для TS и React
        },
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      // Ваши правила
      "no-unused-vars": "warn", // Пример
    },
  },
];