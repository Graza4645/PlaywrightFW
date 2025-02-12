import { Client } from 'pg';
import CommonData from '../UtilsData/CommonData.js';

export class Databaseutility {
    constructor() {
        this.dbConfig = {
            host: CommonData.DBUrl,
            port: CommonData.port,
            database: CommonData.database,
            user: CommonData.DBuser,
            password: CommonData.DBpassword
        };
    }

    async DBConnection() {
        const client = new Client(this.dbConfig);
        try {
            await client.connect();
            console.log('✅ Database connected successfully!');

            const columnName = 'account_number';
            const query1 = `SELECT * FROM public.candidate_details WHERE full_name = 'Ramesh' ORDER BY candidate_details_id ASC`;

            const res = await client.query(query1);
            console.log(res.rows[0][columnName]);

        } catch (error) {
            console.error("❌ Error in DB connection:", error.message);
        } finally {
            await client.end();
            console.log('✅ Database Disconnected successfully!');
        }
    }
}
