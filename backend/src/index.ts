import dotenv from 'dotenv';
import { app } from './app.js';
import { initDatabase } from './db/init.js';

dotenv.config();
const port = process.env.PORT || 3000;

try {
  await initDatabase();
  // Start server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
} catch (err) {
  console.error('error connecting to database', err);
}
