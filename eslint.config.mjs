import js from '@eslint/js';
import globals from 'globals';
import daStyle from 'eslint-config-dicodingacademy';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  daStyle,
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
]);