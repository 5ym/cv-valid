const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
const fs = require('fs');

fs.readdir('./recipt', async (err, files) => {
    if (err) throw err;
    for(let file of files) {
        await client.documentTextDetection('./recipt/'+file).then(response => {
            fs.writeFile('./result/'+file+'.json', JSON.stringify(response, null, '    '), err=>{if(err) throw err;});
            console.log('success:recipt/'+file);
        }).catch(err => {
            console.error('error:recipt/'+file);
            console.error(err);
        });
        await client.documentTextDetection('./maskrecipt/'+file).then(response => {
            fs.writeFile('./maskresult/'+file+'.json', JSON.stringify(response, null, '    '), err=>{if(err) throw err;});
            console.log('success:maskresult/'+file);
        }).catch(err => {
            console.error('error:maskresult/'+file);
            console.error(err);
        });
    }
});
