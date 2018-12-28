const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const productroutes = require('./routes/product.route');
const app = express();



let dev_db_url = "mongodb://abhi2k49:prod1234@ds245357.mlab.com:45357/expressproducts";
let mongoDB = process.env.MONGODB_URI || dev_db_url;


mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on('error', console.error.bind(console, 'MongoDB connectionerror: '));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/products', productroutes);

let port = 1234;
app.listen(port, () => {
    console.log('Server started on port' + port);
});