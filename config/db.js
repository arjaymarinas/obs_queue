import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

// Create a new pool instance for PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Check database connection status
/*pool.connect((err, client, release) => {
    if (err) {
        console.error('Error acquiring client', err.stack);
    } else {
        console.log('Database connection successful');
        release(); // Release the client back to the pool
    }
});*/

// Export query function
export const query = (text, params) => pool.query(text, params);