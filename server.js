let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./database/db');
    path = require('path');

const api = require('./routes/item.routes')
const app = express();
const port = process.env.PORT || 4000;
const routes = require('./routes');

// MongoDB Configuration
// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Database sucessfully connected')
// },
//     error => {
//         console.log('Database could not be connected: ' + error)
//     }
// )


//Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
  }

//Define middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());


//Add routes
app.use('/public', express.static('public'));
app.use('/api', api);
app.use('/', routes);

//Connect to Mongo DB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/closetItems');

app.listen(port, () => {
    console.log('Connected to port ' + port)
})


// app.use((req, res, next) => {
//     // Error goes via `next()` method
//     setImmediate(() => {
//         next(new Error('Something went wrong'));
//     });
// });

// app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });


//Changes to Server done after this