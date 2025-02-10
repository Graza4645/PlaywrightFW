const fs = require('fs');
const { Client } = require('pg');

const dbConfig = {
    host: 'alcssaas-qa-db-cluster.cluster-ro-cfzfyyb22gg1.ap-south-1.rds.amazonaws.com',
    port: 5432,
    database: 'offer-letter-hcm-db-qa',
    user: 'postgres',
    password: 'OcHZszyP7EnQqlat',
};

async function connectDB() {
    const client = new Client(dbConfig);
    try {
        await client.connect();
        console.log("✅ Database connected successfully!");
    } catch (error) {
        console.error("❌ Database connection error:", error.message);
    }
    return client;
}

connectDB();
