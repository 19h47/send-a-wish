module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
	rules: {
		'arrow-parens': ['error', 'as-needed'],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 0,
		indent: ['error', 'tab'],
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
