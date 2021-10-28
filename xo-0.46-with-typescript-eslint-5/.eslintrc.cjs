module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		"@typescript-eslint/no-unsafe-assignment": [
			"error"
		],
		"@typescript-eslint/no-unsafe-call": [
			"error"
		],
		"@typescript-eslint/no-unsafe-return": [
			"error"
		]
	},
};
