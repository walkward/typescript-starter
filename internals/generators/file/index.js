/*!
 * Generate boilerplate files
 */

const path = require('path');

module.exports = {
  description: 'new typescript file',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'enter the file name',
  }, {
    type: 'input',
    name: 'summary',
    message: 'enter summary of file contents',
  }, {
    type: 'list',
    name: 'type',
    message: 'Select the type of export',
    default: 'function',
    choices: () => [
      'controller',
      'model',
    ],
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
