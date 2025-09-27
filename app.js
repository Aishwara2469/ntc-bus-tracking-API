

import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import { readFile } from 'fs/promises';
import { join } from 'path';
import swaggerUi from 'swagger-ui-express';
import { sequelize } from './models/index.js';
import authRoutes from './routes/authRoutes.js';
import routeRoutes from './routes/routeRoutes.js';
import busRoutes from './routes/busRoutes.js';
import tripRoutes from './routes/tripRoutes.js';
import locationRoutes from './routes/locationRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

async function startServer() {
  try {
    const swaggerDocument = JSON.parse(
      await readFile(join(__dirname, 'docs', 'openapi.json'), 'utf8')
    );
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.use('/auth', authRoutes);
    app.use('/routes', routeRoutes);
    app.use('/buses', busRoutes);
    app.use('/trips', tripRoutes);
    app.use('/locations', locationRoutes);

    const PORT = process.env.PORT || 3000;

    await sequelize.authenticate();
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Unable to connect:', err);
    process.exit(1);
  }
}

startServer();