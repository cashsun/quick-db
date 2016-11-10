# quick-db
boilerplate for mongodb with auto username/password setup

`config` folder under working dir. add `default.js` (or [NODE_ENV].js)
```javascript
var path = require('path');
var workingDir = process.cwd();
module.exports = {
    mongo:{
        version: '3.2.10', //your mongodb version
        dataDir: path.join(workingDir, './data'),
        mongoDir: path.join(workingDir, './mongo'),
        port: 27017,
        db:'myApp',
        username: 'myapp_user',
        password:'myapp_password'
    }
};
```

unzip compatible mongo in your mongo folder under version subfolder
```
config
   - default.js
mongo
   - 3.2.10
       - bin
       GNU-AGPL-3.0
       ...
```


start mongo.
```
npm run start
```
