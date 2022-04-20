const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const config = require('./config')
const userRouter = require('./routes/user');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
      optionsSuccessStatus: 200, 
    })
  );

app.use('/users', userRouter);

const boots = async ()=>{
    await mongoose.connect(config.mongoUri, config.mongoOptions);
    app.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`);
    })
}
boots();
