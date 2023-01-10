const express = require('express');
const port = 8000;
const app = express();

const cookieParser = require('cookie-parser');

//express ejs layout
const expressLayouts = require('express-ejs-layouts');
//setting up mongodb configuration
const db = require('./config/mongoose');


//used for session cookie 
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

//for storing session cookie in mongo db
// const MongoStore = require('connect-mongo')(session);


app.use(express.urlencoded());
app.use(cookieParser());

//static file accessing in assets directory
app.use(express.static('./assets'));

//extract style and script from sub pages intothe layout
app.use(expressLayouts);
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);

//setting view engine as ejs
app.set('view engine' , 'ejs');
//setting path for view directory
app.set('views' , './views');



//mongo store is used to store the session cookie in db
app.use(session({
    name: "social-media-web",
    // change secret during before deployment in production 
    secret: 'justtesting',
    saveUninitialized: false,
    cookie: {
        maxAge :(1000*60*100)
    }
}))

// store: new MongoStore({
//     mongooseConnection: db,
//     autoRemove: 'disable'
// }, (err) => {
//     console.log(err || 'connect mongodb setup ok')
// })

app.use(passport.initialize());
app.use(passport.session());


app.use(passport.setAuthenticatedUser);

//middleware for express router
app.use('/', require('./routers'));

app.listen(port , (err) => {
    if(err){
        console.log("error in running in server");
    }else{
        console.log(`Yeah :)) My Express server is running on port ${port}`)
    }
})