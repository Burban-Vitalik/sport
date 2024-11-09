import dotenv from 'dotenv';
import { Knex } from 'knex';

dotenv.config({ path: '.env.development' });

const config: Knex.Config = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    extension: 'ts',
  },
};

export default config;
