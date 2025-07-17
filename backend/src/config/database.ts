import mongoose from 'mongoose';

export function initDatabase(connectionString : string | undefined = undefined): Promise<typeof mongoose> {
  let DATABASE_URL: string = connectionString ?? process.env.DATABASE_URL as string;
  mongoose.connection.on('open', () => {
    console.info('successfully connected:', DATABASE_URL);
  });
  console.log(DATABASE_URL);
  const connection = mongoose.connect(DATABASE_URL);
  return connection;
}
