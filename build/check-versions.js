'use strict'
/**
 * chalk 包的作用是修改控制台中字符串的样式，包括：

字体样式(加粗、隐藏等)
字体颜色
背景颜色
 * 
 * 
*/
const chalk = require('chalk')
const semver = require('semver') 
//用于将 semver.clean('  =v1.2.3   ') // '1.2.3' 版本号进行处理
const packageConfig = require('../package.json')
const shell = require('shelljs')

function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version), //本机node的版本号
    versionRequirement: packageConfig.engines.node //">= 6.0.0",应用所需要node版本号
  }
]

if (shell.which('npm')) { 
  //判断本机 的npm 版本，如果存在，那么就添加进要判断的数组
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]
//semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3') // true
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1) //退出当前node进程
    //process.exit方法用来退出当前进程。它可以接受一个数值参数，如果参数大于0，表示执行失败；如果等于0表示执行成功。
  }
}
