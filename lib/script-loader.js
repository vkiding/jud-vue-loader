var REQUIRE_REG = /require\((["'])@jud\-module\/([^\)\1]+)\1\)/g

module.exports = function (content) {
  this.cacheable && this.cacheable()
  return content.replace(REQUIRE_REG, '__jud_require_module__($1$2$1)')
}
