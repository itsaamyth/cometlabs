require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
var cors = require('cors')
var path = require('path');


//cors
app.use(cors())



//My Routes
const homeRoutes = require('./routes/home')
const submitProblem = require('./routes/submitProblem')
const addProblem = require('./routes/problems')
const user = require('./routes/user')




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//DB Connection2
mongoose.connect(process.env.DATABASE,
    {useNewUrlParser: true, 
       useUnifiedTopology: true,}).then(()=>{
       console.log("DB Connected")
   }).catch(()=>{
       console.log("DB Disconnected !!!")
       console.log(err)
   })


//Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))




//MY ROUTES
app.use('/',homeRoutes)
app.use('/api',submitProblem)
app.use('/api',addProblem)
app.use('/api',user)










//PORT
const port = process.env.PORT || 8500

app.listen(port,()=>{
    console.log(`App started on port : ${port}`)
})
