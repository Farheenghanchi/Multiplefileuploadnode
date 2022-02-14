const express = require('express')

const app = express()

const multer = require("multer");

const PORT = process.env.PORT || 5000

const path = require('path')

app.set("view engine","ejs")

//  Upload For the single File  
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "public/uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
//     },
//   });
  
//   var upload = multer({ storage: storage });




//Upload  For the multiple Files 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
  });
  
  var upload = multer({ storage: storage });
  
 // var uploadMultiple = upload.fields([{ name: 'file1', maxCount: 10 }, { name: 'file2', maxCount: 10 }])  
 
app.get('/',(req,res) => {
    res.render("index")
})

// app.post('/uploadfile', uploadMultiple, function (req, res, next) {

//     if(req.files){
//         console.log(req.files)

//         console.log("files uploaded")
//     }
    
// })


// changes with bulk file
app.post('/uploadfile', upload.array('multi-files'), (req, _res) => {
    if(req.files){
        console.log(req.files)
        //console.log(fileName)
        //console.log(originalName)
        //console.log(paths)
        console.log("files uploaded")
    }  
});


app.listen(PORT,() => {
    console.log(`App is listening on Port ${PORT}`)
})