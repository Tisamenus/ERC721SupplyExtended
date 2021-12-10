const exec = require('./callFromCommandline.js')
const versions = require('./resources/package_versions.json')

async function addPackage() {
  const packageName = process.argv[2]
  const versionIdentifier = versions[packageName][process.argv[3]]

  await exec.commandlineCall(`yarn add ${packageName}${versionIdentifier}`)
}
addPackage()
