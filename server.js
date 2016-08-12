const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/nav', (req, res) =>
  res.sendFile(`${__dirname}/navigation.json`)
);

app.listen(8081, () =>
  console.log('Nav API located at http://localhost:8081/nav')
);
