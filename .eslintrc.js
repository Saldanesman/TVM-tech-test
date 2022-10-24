module.exports = {
	env: {
		browser: true,
		es2021: true,
		cypress: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'cypress'],
	rules: {
		'no-unused-vars': 'error',
		'react/prop-types': 'off',
	},
};
