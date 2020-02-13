module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'airbnb-base',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	'rules': {
		'@typescript-eslint/indent': [2, 'tab'],
		'@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
		'func-names': ['warn', 'never'],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				"js": "never",
				"jsx": "never",
				"ts": "never",
				"tsx": "never"
			}
		],
		"indent": [2, "tab"],
		'linebreak-style': ['off', 'unix'],
		'no-console': ['error', { 'allow': ['warn', 'error'] }],
		'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
		'no-tabs': ["error", { 'allowIndentationTabs': true }],
		'strict': ['warn' , 'global'],
	}
};
