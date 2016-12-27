import inquirer from 'inquirer';
import Rx from 'rx';

import Command from './Command';


/**
 * 问讯项目名
 */
function askInit() {
  const prompts = new Rx.Subject();

  inquirer.prompt(prompts)
    .then((answers) => {
      new Command().process(answers);
    });
  // 询问项目名
  prompts.onNext({
    name: 'name', 
    message: 'Input your project name',
    validate: function(input) {
      if (input && input.trim() === '') {
        return ('you need to provide project name');
      }
      return true;
    }
  });
  // When you're done
  prompts.onCompleted();
}

export default program =>{

  program.command('init')
    .description('init project')
    .action(() => {
      askInit();
    })
}