
var fs = require("fs");
var watchIt = require("./");

var root = ".test_root";

mkdirs(root);

watchIt(root, function(pathname) {
  console.log(pathname);
});


function mkdirs(pathname) {
  try {
    fs.mkdirSync(root);
  } catch (e) {
    if (fs.statSync(pathname).isDirectory()) {
      // yeah whatever. it's a directory.
      return;
    }
  }
}
