
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
                quote: 'Metal'
            })

        }

    )
})

const deleteButton = document.querySelector('#delete-button')
deleteButton.addEventListener('click',()=>{
    fetch('/quotes',
    {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "Darth Vader"
        })
    })
})






// app.put('/quotes',(req,res)=>{
//     console.log(req.body)
// })

