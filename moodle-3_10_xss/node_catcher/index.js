'use strict';

const express = require('express');
const bodyParser = require('body-parser')

// Constants
const PORT = 9090;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(bodyParser.text({type: '*/*'}));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/pwned', (req, res) => {
  console.log(req.body);
  res.send('Got a POST request')
  
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
  console.log(`*********************DID YOU UPDATE THE PAYLOAD IP?******************`)
  console.log(`*******************DID YOU UPDATE THE PAYLOAD IP?******************`)
  console.log(`*****************DID YOU UPDATE THE PAYLOAD IP?******************`)
  console.log(`***************DID YOU UPDATE THE PAYLOAD IP?******************`)
  console.log(`*************DID YOU UPDATE THE PAYLOAD IP?******************`)
  console.log(`***********DID YOU UPDATE THE PAYLOAD IP?******************`)
  console.log(`*********DID YOU UPDATE THE PAYLOAD IP?******************`)
  console.log(`*******DID YOU UPDATE THE PAYLOAD IP?******************`)
  console.log(`*****DID YOU UPDATE THE PAYLOAD IP?******************`)
  console.log(`***DID YOU UPDATE THE PAYLOAD IP?******************`)
});
