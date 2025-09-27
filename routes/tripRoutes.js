import express from 'express';
import { getAllTrips, getTripById, createTrip, updateTrip, deleteTrip } from '../controllers/tripController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllTrips); 
router.get('/:id', getTripById); 
router.post('/', auth(['admin', 'operator']), createTrip); 
router.put('/:id', auth(['admin', 'operator']), updateTrip); 
router.delete('/:id', auth(['admin']), deleteTrip); 

export default router;