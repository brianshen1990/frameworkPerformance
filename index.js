const express = require('express');
const app = express();

app.use(express.static('React/esample/build'));
app.use('/jquery', express.static('jQuery'));

app.listen(8888, () => console.log('Example app listening on port 8888!'))