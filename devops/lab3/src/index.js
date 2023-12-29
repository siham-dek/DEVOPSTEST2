const express = require('express');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

const db = require('./dbClient');
db.on('error', (err) => {
  console.error(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/user', userRouter);

// Endpoint Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

const server = app.listen(port, (err) => {
  if (err) throw err;
  console.log('Server listening on port ' + port);
});

module.exports = server;
