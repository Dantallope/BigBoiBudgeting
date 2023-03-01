const express = require('express')
const mongoose = require('mongoose')

app.use(express.json())

const app = express();

const port = process.env.PORT || 3001

app.get('/', (re, res) => res.status(200));

app.listen(port, () => console.log(`Server is running on localhost: ${port}`));