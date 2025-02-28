import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    {
        files: ["**/*.{ts,tsx}"], // Для TypeScript файлов (React: .tsx)
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        plugins: {
            "@typescript-eslint": tseslint,
        },
        settings: {
            "import/resolver": {
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            "no-unused-vars": "warn",
        },
    },
    {
        // Оверрайд для чистых JavaScript файлов
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        // Вместо extends используем spread для включения базовой конфигурации @eslint/js
        ...pluginJs.configs.recommended,
        rules: {
            // Включаем максимально строгий набор правил для JS
            strict: ["error", "global"],
            eqeqeq: "error",
            curly: "error",
            "no-var": "error",
            "prefer-const": "warn",
            "no-unused-vars": [
                "warn",
                { args: "none", ignoreRestSiblings: true },
            ],
            "no-debugger": "warn",
        },
    },
];
