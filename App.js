const express = require('express')
const app = express()
// Displays Hello World and to learn about branching and tags!!!
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send('Hello to Andy and the rest of the world out there!')
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}`)
})

