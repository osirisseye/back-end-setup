const express = require('express');
// es2015 is not available - we depend on CommonJS 
const app = express();

//let's create a route handler - here accessing '/'
app.get('/', (req, res) => {
    res.send({ hi: 'there' })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);