const express = require('express');
const multer  = require('multer');
const path = require('path');
const app = express(); 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,"uploads");
  },
  filename: (req, file, cb) => {
    let fileEXT = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + fileEXT);
  }
});

const upload = multer({ storage }).array('file', 10); 

app.post("/upload", upload, (req, res) => {
  res.send(`File Uploaded successfully`);
});


app.listen(5000);