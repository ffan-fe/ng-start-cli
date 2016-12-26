import colors from 'colors/safe';
import path from 'path';
import { exec, spawn, spawnSync } from 'child_process';
import {writeConfigFile} from '../../tools';

const GENERATOR_PATH_PREFIX = path.join(__dirname, '../../../template');

export default class Command {
  process(project) {
    console.log(colors.yellow(`Start to create project: ${project.name}`));
    this.createDir(project)
      .then(this.writeConfig);
  }

  async writeConfig(info) {
    await writeConfigFile(
      {
        name: info.projectName
      },
      path.join(process.cwd(), info.projectName));
    return info;
  }

  createDir(project) {
    const projectName = project.name;
    console.log('   开始创建文件夹 %s', project.name);

    return new Promise((resolve, reject) => {
      const child = exec(`mkdir ${projectName}`,
        (error, stdout, stderr) => {
          if (error != null) {
            reject(error);
          }
          const sourceDir = path.resolve('.', `./${projectName}`);
          resolve({
            projectName,
            sourceDir,
            templatePath: GENERATOR_PATH_PREFIX
          });
        }
      );
    });
  }
}