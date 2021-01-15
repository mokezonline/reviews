const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/patagonia';

const DB = mongoose.connect(mongoUri, (
  {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
  }))
  .then(() => { console.log (`connected to DB @ ${mongoUri}`); })
  .catch(console.log);

module.exports = DB;
