const express = require('express');
const port = 8000;
const app = express();

//static file accessing in assets directory
app.use(express.static('./assets'));

//express ejs layout
const expressLayouts = require('express-ejs-layouts');
//extract style and script from sub pages intothe layout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);
app.use(expressLayouts);

//middleware for express router
app.use('/' , require('./routers/index'));

//setting view engine as ejs
app.set('view engine' , 'ejs');
//setting path for view directory
app.set('views' , './views');



app.listen(port , (err) => {
    if(err){
        console.log("error in running in server");
    }else{
        console.log(`Yeah :)) My Express server is running on port ${port}`)
    }
})