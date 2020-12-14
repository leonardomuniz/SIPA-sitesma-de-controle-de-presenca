const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./routes');

const app = express();

global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
mongoose.connect('mongodb+srv://leo:leo@cluster0.2kwu3.mongodb.net/tcc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


app.use(cors());
app.use(express.json());
app.use(router);
app.listen(process.env.PORT || 3333);
console.log('o Pai tá on !!!')