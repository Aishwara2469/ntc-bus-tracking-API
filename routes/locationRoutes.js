import express from 'express';
import { getAllLocationUpdates, getLocationUpdateById, createLocationUpdate, updateLocationUpdate, deleteLocationUpdate, getLocationUpdatesByTripId } from '../controllers/locationController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllLocationUpdates); 
router.get('/trip/:tripId', getLocationUpdatesByTripId);
router.get('/:id', getLocationUpdateById); 
router.post('/', auth(['admin', 'operator']), createLocationUpdate); 
router.put('/:id', auth(['admin', 'operator']), updateLocationUpdate); 
router.delete('/:id', auth(['admin']), deleteLocationUpdate); 

export default router;