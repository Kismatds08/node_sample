//const { json } = require("body-parser")
// app.use(bodyParser.jason())

const update = document.querySelector('#update-button')
update.addEventListener('click', () => {
    fetch('/quotes',
        {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Darth Vader',
                quote: 'metalLink'
            })

        }

    )
})
// app.put('/quotes',(req,res)=>{
//     console.log(req.body)
// })

