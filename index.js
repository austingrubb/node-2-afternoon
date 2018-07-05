const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
const products_controller = require('./products_controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database =>{
    app.set('db', database)
}).catch(error => {
    console.log('error',error)
})

app.get('/api/products', products_controller.getAll);
app.post('/api/prodct', products_controller.create);
app.get('/api/product/:id', products_controller.getOne);
app.put('/api/product/:id', products_controller.update);
app.delete('/api/products/:id',products_controller.delete);


const port = process.env.PORT || 3000;
app.listen(port,() =>{console.log(`Server listening on port ${port}`); } );
