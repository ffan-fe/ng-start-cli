import colors from 'colors/safe';
import path from 'path';
import vfs from 'vinyl-fs';

import { exec, spawn, spawnSync } from 'child_process';

const GENERATOR_PATH_PREFIX = path.join(__dirname, '../../../template');

export default class Command {
  process(project) {
    console.log(colors.yellow(`Start to create project: ${project.name}`));
    this.createDir(project)
      .then(this.getGenerator)
      .then(this.installPackage)
      .catch(error => {
        console.log('');
        console.error(colors.red(error.message));
        process.exit(1);
      });  
  }

  /**
   * 拷贝需求的文件, 并且配置一下
   */
  getGenerator(info){
    const {projectName, sourceDir, templatePath} = info;
    return new Promise((resolve, reject) => {
      vfs.src('**/*', { cwd: templatePath, dot: true })
        .pipe(vfs.dest(sourceDir))
        .on('end', () => { resolve(sourceDir); })
        .on('error', err => { reject(err); })
        .resume();
    });
  }

  /**
   * 安装依赖
   */
  installPackage(targetDirectory) {
    console.log(colors.yellow('Installing begin: npm install -d'));
    return new Promise((resolve, reject) => {
      const child = spawn('npm', ['install'], { cwd: targetDirectory, stdio: "inherit" });
      child.on('close', () => {
        console.log(colors.green('install complete'));
        resolve(targetDirectory);
      });
      child.on('error', err => {
        console.error(colors.red(err));
        reject();
      });
    });
  }

  /**
   * 创建文件夹
   */
  createDir(project) {
    const projectName = project.name;
    console.log('   Create folder %s', project.name);

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