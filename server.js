const bodyParser = require('body-parser');
const {response} = require('express');
const express = require('express');
const app = express();

app.listen(3000, () => console.log ('listening to 3000'));

app.use(bodyParser.urlencoded({
    extended: true
}))

//app.get((first argument)endpoint, like '/', (second argument)callback function)
app.get('/',(req,res) => res.sendFile(__dirname + '/index.html'));

app.post('/quotes', (req, res) => {
    console.log(req.body);
})