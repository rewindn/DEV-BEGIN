const express = require('express');
const app = express();
const body = require('body-parser');
const mongo = require('mongodb').MongoClient;
const namadb = "test";
const dburl = "mongodb://127.0.0.1:27017"; 
const object = require('mongodb').ObjectID;
//dijadikan null terlebih dahulu 
let dbo = null;
//connect databases 
mongo.connect(dburl,(error,db)=>{
if(error) throw error;
// console.log(db);
dbo = db.db(namadb);
})
//untuk url nya biart connect 
app.use(body.urlencoded({extended : false}))
//untuk nambah port 
app.listen('8000',(b)=>{
  if (b === undefined) {
    console.log("berhasil");
  }
     
  
})//array (function untuk data array ) 
    //untuk menampulkan semua data jadi tidak perlu req dari params maupun object
app.get('/ris',(req,resss)=>{
  dbo.collection('sekolah').find().toArray((err,res)=>{
     if (err) throw err;
     resss.json(res);   
  })
})
//search endpoint (memberikan reg berupa params atau body sesuatoi kemampuan kita setelah itu param dari req tersebut di findone (tanpa array) dan menemukannya) 
app.get('/coba/:id',(reg,ress)=>{
let id = reg.params.id;
let idobject = new object(id); 
dbo.collection('sekolah').findOne({"_id":idobject},(err,res)=>{
if (err) { throw err ;
  
}else{
  ress.json(res);
}

})
   })
app.post('/faris/',(req,res)=> {
// res.send('hello world');

let namav = req.body.nama;

res.send("nama siswa");
res.send(namav); 
})


app.get('/kirim/:nama/:kelas/:makan/:absennya',(req,ress)=>{
let nama = req.params.nama;
let hobby = req.params.kelas; 
let makan = req.params.makan;
let absen = req.params.absennya;
dbo.collection('siswa').insertOne({nama:nama,hobby:hobby,jamHobby:makan,siswa_id:absen},(err,res)=>{ 
if (err) { throw err;
  
}
else{

  ress.send("good");
}
});
}); 
app.get('/siswa',(req,ress)=>{
dbo.collection('siswa').find().toArray((re,res)=>{
if (re) { throw re;
}else{
  ress.json(res);
  }
  
}
)});