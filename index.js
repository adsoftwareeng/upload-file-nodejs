const express = require('express');
const multer  = require('multer');
const path = require('path');
const app = express(); 

const upload = multer({
      storage:multer.diskStorage({
        destination:function(req,file,cb){
             cb(null,"uploads");
        },
        filename:function(req,file,cb){
          // console.log(file);
          let fileEXT = path.extname(file.originalname);
           cb(null, file.fieldname + "-" + Date.now() +fileEXT)
        }
      })
}).single('file');

app.post("/upload", upload, (req,res)=>{
  res.send("File Uploaded");
});

app.listen(5000);