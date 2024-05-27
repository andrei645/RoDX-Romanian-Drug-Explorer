const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.development' });


const pool = new Pool({
    user: process.env.USER || '',
    host: process.env.HOST || '',
    database: process.env.DATABASE || '',
    password: process.env.PASSWORD || '',
    port: process.env.PORT || '',
});

const fetchSeizuresData = async () => {
    const query = `
      SELECT s.id, c.name as county, d.name as drug, s.quantity, s.date
      FROM Seizures s
      JOIN County c ON s.county_id = c.id
      JOIN Drug d ON s.drug_id = d.id
      ORDER BY s.date`;
    const client = await pool.connect();
    try {
        const { rows } = await client.query(query);
        return rows;
    } finally {
        client.release();
    }
};

module.exports = {
    fetchSeizuresData,
};
