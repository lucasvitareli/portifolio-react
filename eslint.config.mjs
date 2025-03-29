import globals from "globals";
import pluginJS from 'eslint-plugin-react';
import parserTypescript from '@typescript-eslint/parser';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginPrettier from 'eslint-plugin-prettier'; // Certifique-se de que este pacote está instalado
import tseslintRecommended from '@typescript-eslint/eslint-plugin'; // Importa o plugin do TypeScript

/* @type {import('eslint').Linter.FlatConfig[]} */

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: parserTypescript,
    },
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React instalada.
      }
    },
    plugins: {
      react: pluginJS,
      'react-hooks': pluginReactHooks,
      prettier: pluginPrettier,
      '@typescript-eslint': tseslintRecommended,
    },
    rules: {
      ...pluginJS.configs.recommended.rules, // Regras recomendadas do React
      ...tseslintRecommended.configs.recommended.rules, // Regras recomendadas do TypeScript
      ...pluginReactHooks.configs.recommended.rules, // Regras recomendadas do React Hooks
      'react-hooks/rules-of-hooks': 'error', // Verifica as regras dos Hooks
      'react-hooks/exhaustive-deps': 'warn', // Verifica as dependências dos efeitos
      'react/prop-types': 'off', // Desativa a verificação de prop-types (usamos TypeScript para isso)
      'react/react-in-jsx-scope': 'off', // Não necessário com React 17+
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Desativa a exigência de tipos explícitos em funções
    }
  }
];