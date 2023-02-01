const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');


let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Login Route
app.post('/acess', async (req, res) => {
    console.log(req.body.nameUser);
    console.log(req.body.passwordUser);
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando')
});
