# quick-db
boilerplate for mongodb with auto username/password setup

add `config` folder in working dir. add `default.js` (or [NODE_ENV].js)
```javascript
var path = require('path');
var workingDir = process.cwd();
module.exports = {
    version: '3.2.10', //your mongodb version
    dataDir: path.join(workingDir, './data'),
    mongoDir: path.join(workingDir, './mongo'),
    port: 27017,
    db:'myApp',
    username: 'hanabi_usr',
    password:'hanabi_password'
};
```
