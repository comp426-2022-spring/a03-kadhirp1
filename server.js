const express = require('express')
const app = express()

//Command Line Argument for port here
var port = 5000

const server = app.listen(port, () => {
    console.log(`Server is running on ${port}`)
    //Same asconsole.log('App is running on port %PORT%'.replace('$PORT$', port))
})

app.use(function(req, res) {
    res.status(404).send("Endpoint does not exist")
    res.type("text/plain")
}
)