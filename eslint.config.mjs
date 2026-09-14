// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: ["out/**"],
	},
	eslint.configs.recommended,
	tseslint.configs.recommended,
	{
		rules: {
			"semi": [2, "always"],
			"@typescript-eslint/no-unused-vars": 0,
			"@typescript-eslint/no-explicit-any": 0,
			"@typescript-eslint/explicit-module-boundary-types": 0,
			"@typescript-eslint/no-non-null-assertion": 0,
			"no-constant-condition": 0,
		},
	},
);
