const fs = require('fs');

data = {
    'normal': 0,
    'canny': 0
};
fs.readdir('./result', async function(err, files){
    if (err) throw err;
    files.forEach(file=> {
        data.normal += require('./result/'+file)[0]['fullTextAnnotation']['text'].replace(/[^亜-熙ぁ-んァ-ヶ\d]/g, '').length;
        data.canny += require('./maskresult/'+file)[0]['fullTextAnnotation']['text'].replace(/[^亜-熙ぁ-んァ-ヶ\d]/g, '').length;
    });
    fs.writeFile('./count.json', JSON.stringify(data, null, '    '), err=>{if(err) throw err;});
});
