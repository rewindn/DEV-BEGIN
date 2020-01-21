const express = require('express');
const app = express();
const body = require('body-parser');

let dbo = null;
mongo.connect(dburl,(err,db)=>{
if(err) throw err;
dbo = db.db(namadb);
})

app.use(body.urlencoded({extended : false}))
sonst 

app.listen('8000',(b)=>{
     console.log(b);
  
})

app.post('/faris',(req,res)=>{
let name = req.body.name;
let kelas = req.body.kelas;
res.send("nama:"+name+",kelas:"+kelas);
})
app.get('/faris/:nama',(req,res)=> {
// res.send('hello world');

let namav = req.params.nama;

res.send("nama siswa:"+namav);
})
