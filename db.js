// const mysql = require('mysql2');
// const dotenv = require('dotenv');

// // Load environment variables from .env file
// dotenv.config();

// // Create a MySQL database connection pool
// const pool = mysql.createConnection({
//     connectionLimit: 10,
//     host: '127.0.0.1',
//     user: 'root@localhost',
//     password:' paVanriShi@22',
//     // database: 'village_registration_db,
// });

// module.exports = pool;
const mongoose = require("mongoose");

const connctToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pavan:pavan@cluster0.zgf6gnt.mongodb.net/villege_registration?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("database is connected");
    const db = mongoose.connection;
    console.log(db.name);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connctToDB;