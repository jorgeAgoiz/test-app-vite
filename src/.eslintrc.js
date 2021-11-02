module.exports = {
	'env': {
		'node': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsx-a11y/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'jsx-a11y'
	],
	'rules': {
		'semi': [ 'error', 'never' ],
		'quotes': [ 'error', 'single' ],
		'arrow-parens': [ 'error', 'as-needed' ],
		'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'max-len': [ 'error', { 'code': 80, 'ignoreUrls': false } ],
		'indent': [ 'error', 'tab' ]
	}
}
