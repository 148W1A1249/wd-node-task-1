
const express = require('express');
const app = express();

// const port = 3000;

app.get('/',(req,res)=>{
const fs = require("fs");
fs.readdir('./testfolder',(err,files)=>{
    if(err) throw err
    // console.log(files);  
    var result = ``;
    var reg = /^[a-zA-Z0-9-]*$/;

    files.map(ele=>{
        if(ele.match(".json")){
            result+= `
            <th>
            <img src="https://miro.medium.com/max/512/1*4e5PgSBgxgFolqvob9x_Wg.png" alt="json file" width="70" height="70">
            <br>${ele}&emsp;
            </th>            
            `;
        }
        if(ele.match(".txt")){
            result+= `
            <th>
            <img src="https://www.computerhope.com/jargon/t/text-file.png" alt="text file" width="70" height="70">
            <br>${ele}&emsp;
            </th>            
            `;
        }
        if(ele.match(".docx")){
            result+= `
            <th>
            <img src="https://image.flaticon.com/icons/png/512/28/28840.png" alt="doc file" width="70" height="70">
            <br>${ele}&emsp;
            </th>            
            `;
        }
        if(ele.match(reg)){
            result+= `
            <th>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/512/folder-icon.png" alt="folder" width="70" height="70">
            <br>${ele}&emsp;
            </th>            
            `;
        }
    })
    result = `<table><tr>${result}</tr></table>`
    res.send(result);

});

});

app.listen(3000)