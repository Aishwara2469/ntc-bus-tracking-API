

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


app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>NTC Bus Tracking API</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            max-width: 800px; 
            margin: 50px auto; 
            padding: 20px;
          }
          h1 { color: #2c3e50; }
          a { color: #3498db; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .endpoint { 
            background: #ecf0f1; 
            padding: 10px; 
            margin: 10px 0; 
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <h1>NTC Bus Tracking API</h1>
        <p>Real-time bus tracking system for Sri Lanka's inter-provincial buses</p>
        <h2>Documentation</h2>
        <p><a href="/api-docs">📚 API Documentation (Swagger UI)</a></p>
        <h2>Available Endpoints</h2>
        <div class="endpoint">POST /auth/login - User authentication</div>
        <div class="endpoint">GET /routes - List all bus routes</div>
        <div class="endpoint">GET /buses - List all buses</div>
        <div class="endpoint">GET /trips - List all trips</div>
        <div class="endpoint">GET /locations - Location updates</div>
        <h2>Status</h2>
        <p>✅ API is operational</p>
      </body>
    </html>
  `);
});


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