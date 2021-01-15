const { json } = require("body-parser")

app.use(express.static('public'))

const update = document.querySelector('#update-button')
update.addEventListener('click', () => {
    fetch('/quotes',
        {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: Dark
            })

        }

    )
})