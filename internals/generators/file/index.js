/*!
 * Generate boilerplate files
 */

const path = require('path');

module.exports = {
  description: 'new typescript file',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'Enter the file name',
    validate: filename => {
      if (/^([^\s.\x00-\x1F!"$'\(\)*,\/:;<>\?\[\\\]\{\|\}\x7F]+)$/.test(filename)) return true;
      return 'Invalid filename';
    },
  }, {
    type: 'input',
    name: 'summary',
    message: 'Enter summary of file contents',
  }, {
    type: 'list',
    name: 'type',
    message: 'Select the type of export',
    default: 'function',
    choices: () => [
      'controller',
      'model',
    ],
  }, {
    type: 'confirm',
    name: 'restMethods',
    message: 'Does this controller contain REST methods?',
    default: false,
    when: answers => {
      if (answers.type === 'controller') return true;
      return false;
    },
  }],
  actions: data => {
    let templateFile, filePath;

    switch (data.type) {
    case 'model':
      templateFile = path.join(__dirname, './class.js.hbs');
      filePath = path.join(__dirname, '../../../src/models/{{ properCase name }}.ts');
      break;
    default:
      templateFile = path.join(__dirname, './function.js.hbs');
      filePath = path.join(__dirname, '../../../src/controllers/{{ camelCase name }}.ts');
    }

    return [{
      type: 'add',
      path: filePath,
      templateFile,
    }];
  },
};
