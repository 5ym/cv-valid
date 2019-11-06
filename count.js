const fs = require('fs');

data = {
    'normal': 0,
    'canny': 0
};
fs.readdir('./result', function(err, files){
    if (err) throw err;
    files.forEach(file=> {
        data.normal += require('./result/'+file)[0]['fullTextAnnotation']['text'].replace(/\r?\n/g, '').length;
        data.canny += require('./maskresult/'+file)[0]['fullTextAnnotation']['text'].replace(/\r?\n/g, '').length;
    });
    fs.writeFile('./count.json', JSON.stringify(data, null, '    '), err=>{if(err) throw err;});
});
