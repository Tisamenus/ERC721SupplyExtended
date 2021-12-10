const exec = require('./callFromCommandline.js')
const { dependencies, devDependencies } = require('../package.json')

async function updateAllPackages() {
  for (const dependency of Object.keys(devDependencies)) {
    await exec.commandlineCall(`yarn upgrade ${dependency}`)
  }
  if (process.argv[2] == '+prod') {
    for (const dependency of Object.keys(dependencies)) {
      await exec.commandlineCall(`yarn upgrade ${dependency}`)
    }
  }
}
updateAllPackages()
