const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');


dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080;

//set view engine
app.set('view engine','ejs');
//app.set('views',path.ressolve(__dirname,'views/ejs'))

//load assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')));
app.use('/img',express.static(path.resolve(__dirname,'assets/img')));
app.use('/js',express.static(path.resolve(__dirname,'assets/js')));


//parse request to body parser
app.use(bodyParser.urlencoded({extended:true}));

//log requests
app.use(morgan('tiny'));

//set default route
app.get('/',(req,res)=>{
    res.render('index')
});
app.get('/add-user',(req,res)=>{
    res.render('add_user')
});
// Listen server on port
app.listen(5000,()=>{
    console.log(`Server Listening on port ${PORT}`);
})
