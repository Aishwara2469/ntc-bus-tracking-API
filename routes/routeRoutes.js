import express from 'express';
import { getAllRoutes, getRouteById, createRoute, updateRoute, deleteRoute } from '../controllers/routeController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllRoutes);
router.get('/:id', getRouteById);
router.post('/', auth(['admin']), createRoute);
router.put('/:id', auth(['admin']), updateRoute);
router.delete('/:id', auth(['admin']), deleteRoute);

export default router;