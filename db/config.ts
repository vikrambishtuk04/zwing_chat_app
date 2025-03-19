import { drizzle } from 'drizzle-orm/mysql2';
import { createConnection } from 'mysql2/promise';

const getConnection = async () => {
  const connection = await createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }).catch((err) => {
    console.error('Error connecting to the database:', err);
    throw err;
  });

  return connection;
};

export const getDb = async () => {
  const connection = await getConnection();
  return drizzle(connection);
};
