const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    var a = 2;
    var b = 3;

    var c = a * b;

    return res.send('Hello World!')
})
//Dinh nghia Route 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))