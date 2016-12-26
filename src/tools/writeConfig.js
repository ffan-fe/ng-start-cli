import vfs from 'vinyl-fs';
import template from 'gulp-template';
import rename from 'gulp-rename';
import path from 'path';
import colors from 'colors/safe';

'use strict';

export default function setConfigTemplate(config, distPath) {
  console.log(colors.yellow('开始在本地创建config.json...'));

  console.log(`   project name is ${config.name}`);
  const configPath =path.join(__dirname,`../../template/config/default.json`);

  // const distPath = path.join(process.cwd(), config.name);
  return new Promise((resolve, reject) => {
    vfs.src(configPath, {dot: true})
      .pipe(template(config))
      .pipe(rename('config.json'))
      .pipe(vfs.dest(distPath))
      .on('end', () => {
        console.log(colors.green('创建config.json文件成功 (¯^¯ )')); 
        resolve(); 
      })
      .on('error', () => { 
        console.error(colors.red('创建config.json文件失败'));
        reject(); 
      })
      .resume();
  });
}