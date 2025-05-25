
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('node app auto deployment with update webhook');
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
