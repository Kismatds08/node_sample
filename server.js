//console.log('Sample node application')

const bodyParser = require('body-parser')
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const connectionStr = 'mongodb+srv://kismatds08:Kismat109547@cluster0.ltztp.mongodb.net/<dbname>?retryWrites=true&w=majority'
// MongoClient.connect(connectionStr, (err, client) => {​​​​ 
//     // ... do something here 
//     if(err) return console.error(err)
//     console.log('Connected to DB')
// }​​​​)
MongoClient.connect(
    connectionStr,
    { useUnifiedTopology: true },
    (err, client) => {
    if (err) return console.error(err);
    console.log("Connected to Database Server");
    const db = client.db('star-wars-quotes')
    const quotesCollections = db.collection('quotes')
//middlewares
app.use( bodyParser.urlencoded(
    {extended: true}
    ))
app.use(bodyParser.json())
app.use(express.static('public'))


    app.post('/quotes', (req,res) => {
        quotesCollections.insertOne(req.body)
        .then( result => {res.redirect('/')})
        .catch(error => console.error(error))
    })
    app.get('/',(req, res)=> {
        db.collection('quotes').find().toArray()
        .then(result => { res.render('index.ejs',{quotes: result})})
        .catch(error=> console.error(error))   
    })
    app.put('/quotes',(req,res)=>{
        console.log(req.body)
        quotesCollections.findOneAndUpdate({
            name: 'Darth Vader'
        },
        { 
            $set:{
                 name: req.body.name, quote: req.body.quote 
                } 
        }, 
        { 
            upsert: true 
        }
        )
        .then(result=> console.log(result))
        .catch(err=>console.error(err))
    })
    }
   ); 

const app = express()

app.listen( 3000, () => console.log("Listening in 3000") )




//app.get( endPoint example '/', callback function )
 //app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))



// Explore
// use
// get
// post
// express
// body parser
// req, res







