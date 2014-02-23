
var path = require("path");
var fs = require("fs");

module.exports = watchIt;
function watchIt(pathname, callback) {
  pathname = path.normalize(pathname);
  return fs.watch(pathname, {persistent: true}, function(meaninglessString, changedName) {
    var fullPath = path.join(pathname, changedName);
    callback(fullPath);
  });
}

