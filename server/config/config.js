var path = require('path')
  , rootPath = path.normalize(__dirname + '/..');
//mongodb://maruf2006@gmail.com:salesladies@dharma.mongohq.com:10006/demo
module.exports = {
  development: {
    db: 'mongodb://maruf:samsonite@dharma.mongohq.com:10006/demo',
    root: rootPath,
    app: {
      name: 'Filex'
    }
  },
  test: {
    db: 'mongodb://localhost/filex_test',
    root: rootPath,
    app: {
      name: 'Filex'
    }
  },
  production: {}
};
