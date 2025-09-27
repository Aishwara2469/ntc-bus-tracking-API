import express from 'express';
import { sequelize } from './models/index.js';
import authRoutes from './routes/authRoutes.js';
import routeRoutes from './routes/routeRoutes.js';
import busRoutes from './routes/busRoutes.js';
import tripRoutes from './routes/tripRoutes.js';
import locationRoutes from './routes/locationRoutes.js';
import swaggerUi from 'swagger-ui-express';
import { readFile } from 'fs/promises';
import { join } from 'path';

const app = express();
app.use(express.json());

const openapiSpec = JSON.parse(await readFile(join(process.cwd(), 'docs', 'openapi.json'), 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpec));

app.use('/auth', authRoutes);
app.use('/routes', routeRoutes);
app.use('/buses', busRoutes);
app.use('/trips', tripRoutes);
app.use('/locations', locationRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Unable to connect:', err));