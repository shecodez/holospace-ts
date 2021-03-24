module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript',
    'plugin:prettier/recommended', // add prettier-eslint plugin which will uses the `.prettierrc.js` config
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  rules: {
    // Allow logs in development but not in production
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Tab indent in templates
		'vue/html-indent': ['error', 'tab'],
		'indent': 'off',

		// Disallow spaces around equal in HTML attributes
		// eg. attr= "value" is invalid
		'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    
    // Maximum 1 empty line
		'no-multiple-empty-lines': ['error', { 'max': 1 }],

    // Force PascalCase for component names
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{
				'ignores': [
					'keep-alive',
					'component',
					'transition',
					'transition-group'
				]
			}
		],

    //'@typescript-eslint/ban-ts-ignore': 'off',
    
    // Force vue tag order 
    "vue/component-tags-order": ["error", {
      "order": ["template", "script", "style"]
    }]
  },
  overrides: [
		{
			files: ['*.vue'],
			rules: {
				// The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
				// does not work with type definitions
				'no-unused-vars': 'off'
			}
		}
	]
};
