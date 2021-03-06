import ora from 'ora';
import inquirerLocal from 'inquirer';

inquirerLocal.registerPrompt(
  'autocomplete',
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('inquirer-autocomplete-prompt'),
);

export const inquirer = inquirerLocal;

export const spinner = ora();

export const config = {
  distPath: process.cwd(),
  /* Will be replaced by the correct URL via @rollup/plugin-replaced */
  serverUrl: '__SERVER_URL__',
};
