const express = require('express');
const port = 8000;
const app = express();

//express ejs layout
const expressLayouts = require('express-ejs-layouts');
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