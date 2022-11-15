const express = require('express');
const port = 8000;
const app = express();

//middleware for express router
app.use('/' , require('./routers/index'));





app.listen(port , (err) => {
    if(err){
        console.log("error in running in server");
    }else{
        console.log(`Yeah :)) My Express server is running on port ${port}`)
    }
})