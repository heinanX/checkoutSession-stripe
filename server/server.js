require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();



app.listen(3000, () => { console.log('Server is up and running..') })