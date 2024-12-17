import mysql from 'mysql2';

// Configure database connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  user: 'root',      // Replace with your database username
  password: '@revansh1311', // Replace with your database password
  database: 'Product'  // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

// Export the db object as default
export default db;


// db.js

