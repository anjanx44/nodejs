var fs = require('fs');

fs.open('abc.txt','w',function(err, file){
    if(err) throw err;
    console.log('Saved');
});
fs.writeFile('kk.txt','hello', function(err){
    if(err) throw err;
    console.log('Saved!');
});