module.exports = {
    'extends': ['standard'],
    'parser': 'babel-eslint',
    'rules': {
        'comma-dangle': ['error', 'always-multiline'],
        'padded-blocks': 'off',
        'sort-keys': ['error', 'asc', {
            'caseSensitive': true,
            'natural': false,
        }],
    },
}
