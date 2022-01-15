require("dotenv").config()
const express = require("express")

const app = express()

app.set('views', './views')

app.use(express.static('./public'))

app.set(`view engine`, `pug`)

app.get(`/`, (req, res) => {
    res.render(`index`)
})

app.listen(process.env.PORT, (err) => {
    if(err)
        return console.error(`Error: ${err}`)
    console.log(`Server started at port ${process.env.PORT} successfully!`)
})
