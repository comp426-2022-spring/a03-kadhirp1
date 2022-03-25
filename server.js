const express = require('express')
const app = express()
const args = require("minimist")(process.argv.slice(2))
//Command Line Argument for port here
args["port"]
const port = args.port || process.env.PORT || 3000

const server = app.listen(port, () => {
    console.log(`Server is running on ${port}`)
    //Same asconsole.log('App is running on port %PORT%'.replace('$PORT$', port))
})


function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0 ) ? 'heads' : 'tails';
  }

app.get('/app', (req, res) => {
    res.status(200).end('OK')
    res.type("text/plain")
})

app.get('/app/flip', (req, res) => {
    var flip = coinFlip()
    res.status(200).json({'flip': flip})
})

app.use(function(req, res) {
    res.status(404).send("404 NOT FOUND")
    res.type("text/plain")
}
)