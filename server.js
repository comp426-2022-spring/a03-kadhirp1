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

  function coinFlips(flips) {
    var arr = []
    if (flips == null || flips == 0){
      arr[0] = coinFlip();
      return arr
    }
    for (let i=0;i <flips; i++){
      arr[i] = coinFlip();
    }
    return arr
 }

 function countFlips(array) {
    var xCounter = 0;
    var yCounter = 0;
    for (var i=0; i<array.length; i++){
      array[i] == 'heads' ? xCounter++:yCounter++;
    }
    if (xCounter == 0){
      return {tails: yCounter}
    }
    else if (yCounter == 0){
      return {heads: xCounter}
    }
    else{
      return {heads: xCounter, tails: yCounter}
    }
    
  }

app.get('/app', (req, res) => {
    res.status(200).end('OK')
    res.type("text/plain")
})

app.get('/app/flip', (req, res) => {
    var flip = coinFlip()
    res.status(200).json({'flip': flip})
    res.type("text/join")
})

app.get('/app/flips/', (req, res) => {
    var flips = coinFlips(1)
    var count = countFlips(flips)
    res.status(200).json( {'raw': flips, 'summary':count})
})

app.get('/app/flips/:number', (req, res) => {
    var flips = coinFlips(req.params.number)
    var count = countFlips(flips)
    res.status(200).json( {'raw': flips, 'summary':count})
})



app.use(function(req, res) {
    res.status(404).send("404 NOT FOUND")
    res.type("text/plain")
}

)