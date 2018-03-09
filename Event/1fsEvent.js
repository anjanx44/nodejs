var fs = require('fs');
var rs = fs.createReadStream('./a.txt');
rs.on('open',function () {
    console.log('The file is open');
});