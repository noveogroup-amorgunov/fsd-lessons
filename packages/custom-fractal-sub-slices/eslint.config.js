import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,
}, {
  rules: {
    'perfectionist/sort-imports': 'off',
    'ts/consistent-type-definitions': ['error', 'type'],
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling'],
      'pathGroups': [{
        pattern: 'react',
        group: 'external',
        position: 'before',
      }, {
        pattern: '*.css',
        group: 'index',
        patternOptions: {
          matchBase: true,
        },
        position: 'after',
      }, {
        pattern: '@monorepo/react-core/**',
        group: 'external',
        position: 'after',
      }, {
        pattern: '~/**',
        group: 'external',
        position: 'after',
      }],
      // "pathGroupsExcludedImportTypes": ["react"],
      'newlines-between': 'never',
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
    }],
  },
})
