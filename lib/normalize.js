var IS_TEST = !!process.env.VUE_LOADER_TEST
var fs = require('fs')
var path = require('path')

// var hasJudLoader = false
// try {
//   hasJudLoader = !!require('jud-loader')
// } catch (e) {}

exports.lib = function (file) {
  if (IS_TEST) {
    return path.resolve(__dirname, file)
  }
  if (fs.existsSync(path.resolve('.', 'node_modules', 'jud-loader', 'node_modules', 'jud-vue-loader'))) {
    return 'jud-loader/node_modules/jud-vue-loader/lib/' + file
  }
  return 'jud-vue-loader/lib/' + file
}

exports.dep = function (dep) {
  if (IS_TEST) {
    return dep
  } else if (fs.existsSync(path.resolve(__dirname, '../node_modules', dep))) {
    // npm 2 or npm linked
    var res = fs.existsSync('jud-loader/node_modules/jud-vue-loader/node_modules/' + dep)
      ? ('jud-loader/node_modules/jud-vue-loader/node_modules/' + dep)
      : ('jud-loader/node_modules/' + dep)
    return res
  } else {
    // npm 3
    return dep
  }
}
