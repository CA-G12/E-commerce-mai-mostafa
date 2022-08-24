const { Pool } = require('pg');

require('dotenv').config();

const url = process.env.DATABASE_URL;

if (!url) throw new Error('Environment variable DB_URL must be set');

const connection = new Pool({
    connectionString: url,
    ssl: false,
});

module.exports = connection;