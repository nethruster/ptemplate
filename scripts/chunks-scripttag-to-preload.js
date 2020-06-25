const path = require('path'), fs = require('fs')

function fromDir(startPath, filter, callback) {
  if (!fs.existsSync(startPath)) {
    console.error(`Directory "${startPath}" doesn't exists`)
    return
  }

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter, callback);
    } else if (filter.test(filename))
      callback(filename);
  };
};

fromDir('dist', /\.html$/, (filename) => {
  console.log('processing ' + filename)
  fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file "${filename}": `, err)
  }
  fs.writeFile(
      filename,
      data.replace(
          /<script charset="utf-8" src="([^"]+)"><\/script>/g,
          '<link rel="preload" href="$1" as="script">'),
      err => {
        if (err) {
          console.error(`Error writing file "${filename}": `, err)
        }
      })
  })
})
