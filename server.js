 const express =require("express");
const path =require("path");
const app = express();
const mysql = require('mysql');
const bodyParser =require('body-parser');
const cors=require("cors");
app.use(bodyParser.json());
app.use(express.json())


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));



  
app.use(cors());




//create connection
const conn =mysql.createConnection({
    host:'database-1.coghnfzytyax.us-west-1.rds.amazonaws.com',
    user:'admin',
    password: 'guri1234',
    database:'track',
    port:'3306'
});



//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log ('Mysql Connected...');
});



//route for insert data to reasons (rea) 
app.post('/yio',(req,res) => {

    let data ={reason:req.body.setName};
    
    console.log(data);
    let sql = "INSERT INTO my SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
       
    
        });
});

//route for accept users
app.get('/merry/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
  
    let sql = "insert into hotspot (location,dsc,pub) select location,description,published from spot where id="+id
    
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});




//route for delete users from requst

app.get('/sharry/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "DELETE FROM spot WHERE id="+id;
  
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});



//route for delete users
app.get('/rila/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "insert into reject select * from spot where id="+id;
    
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});




//route for delete users from request

app.get('/tila/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "DELETE FROM spot WHERE id="+id;
  
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});


//route for insert into blockusers from users
app.get('/pinoa/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "insert into blockusers select * from users where id="+id;
    
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});

//route for delete product

app.get('/noia/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "DELETE FROM users WHERE id="+id;
  
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});


//route for activate users
app.get('/mino/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "insert into users select * from blockusers where id="+id;
    
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});

//route for delete product

app.get('/kika/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "DELETE FROM blockusers WHERE id="+id;
  
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});


//route for block users
app.get('/nois',(req,res) =>{
    let sql ="SELECT * FROM blockusers";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});



//route for insert data to hotspot
app.post('/hots',(req,res) => {
    let data = {location:req.body.location,dsc: req.body.description,pub:req.body.published,title:req.body.title};
    console.log(data);
    let sql = "INSERT INTO hotspot SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});

//route for list allhotspots
app.get('/allm',(req,res) =>{
    let sql ="SELECT * FROM hotspot ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});





//route for list users
app.get('/users',(req,res) =>{
    let sql ="SELECT * FROM users ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

//route for insert data 
app.post('/Save',(req,res) => {
    let data = {username:req.body.username, email_address: req.body.email_address,password:req.body.password};
    console.log(data);
    let sql = "INSERT INTO register SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});


//route for list req hotspot
app.get('/hotti',(req,res) =>{
    let sql ="SELECT * FROM spot ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});


//route for list rejected users
app.get('/reje',(req,res) =>{
    let sql ="SELECT * FROM reject ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});


//route for list userlocation
app.get('/lusers',(req,res) =>{
    let sql ="SELECT * FROM userlocation ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});



//app api
//route for getting the data from users
//inserted data by users
app.post('/wuo',(req,res) => {
    let data = {location:req.body.location,dsc:req.body.description,pub:req.body.published};
    console.log(data);
    let sql = "INSERT INTO hotspot SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});

//app api
//route for reason and users to list on app
app.get('/mobi',(req,res) =>{
    let sql ="SELECT reject.user_email,reject.location,my.reason from reject join my on reject.id = my.id";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

//app api
//route for getting userlocation from users
app.post('/qwe',(req,res) => {
    let data = {username:req.body.username,email:req.body.email,location:req.body.location};
    console.log(data);
    let sql = "INSERT INTO userlocation SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});







//route for email match

app.post('/mail',(req,res)=>{

    let sql = "select * from register where email_address='"+req.body.email_address+"'";
    console.log(sql);
    let query = conn.query(sql,(err,results) => {
        if(err)throw err;
        res.redirect('/Reg');
        });
});


//route for login page
app.post('/login',(req, res)=>{

    let sql = "select * from login where username='"+req.body.username+"' and password='"+req.body.password+"'" ;
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});











app.listen(3306,()=>{
    console.log(`express server running on 3306`);
});