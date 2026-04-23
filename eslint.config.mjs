import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // Cosmetic apostrophe/quote escaping — HTML entities render identically
      // to raw characters in modern browsers; shadcn/ui projects commonly
      // disable this to keep JSX readable.
      'react/no-unescaped-entities': 'off',
      // eslint-plugin-react-hooks v7 introduced stricter rules that flag
      // a few upstream shadcn/ui defaults (sidebar skeleton width via
      // Math.random; use-mobile setState in effect) and one legacy IO
      // fallback in FadeIn. Keep as warnings so they remain visible in CI
      // output without blocking the lint gate until those files are refactored.
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/purity': 'warn',
    },
  },
  {
    ignores: [
      '**/.next/**',
      '**/out/**',
      '**/build/**',
      '**/dist/**',
      '**/node_modules/**',
      '**/coverage/**',
      '.claude/**',
      'public/**',
      'next-env.d.ts',
    ],
  },
]

export default eslintConfig
