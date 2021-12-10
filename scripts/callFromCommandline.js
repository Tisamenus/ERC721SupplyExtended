const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports.commandlineCall = async function commandlineCall(strarg) {
  await exec(strarg)
}
