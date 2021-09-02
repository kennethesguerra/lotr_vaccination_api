require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

const cors=require("cors");
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

const vaccineesRoute = require('./routes/vaccinees');
const vaccinesRoute = require('./routes/vaccines');

app.use('/vaccinees', vaccineesRoute);
app.use('/vaccines', vaccinesRoute);

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to LOTR Vaccination')
})

app.listen(3000, () => {
  console.log('Server is up and running');
});
