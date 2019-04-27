// See https://mongoosejs.com/docs/lambda.html
require('dotenv').config()
const mongoose = require('mongoose');

class MongooseConnection {
  
  constructor() {
    let uri = process.env.CONNECTION_STRING;
    this.conn = mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true
    });
    console.log('Connection created');
  }

  get connection() {
    console.log('Connection gotten');
    return this.conn;
  }

}

module.exports = MongooseConnection;