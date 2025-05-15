// backend/connect.js
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'your-rds-endpoint',
  user: 'nooradmin',
  password: 'NoorLab2025!',
  database: 'noor_db'
});
db.connect(err => {
  if (err) throw err;
  console.log("Connected to RDS!");
});
