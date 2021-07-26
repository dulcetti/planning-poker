module.exports = (plop) => {
  plop.setGenerator('components', {
    description: 'Create a Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/index.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/styles.ts',
        templateFile: 'templates/styles.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/interface.ts',
        templateFile: 'templates/interface.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/spec.ts',
        templateFile: 'templates/spec.hbs',
      },
    ],
  });
};
