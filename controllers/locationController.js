import { LocationUpdate, Trip } from '../models/index.js';

export async function getAllLocationUpdates(req, res) {
  try {
  const locationUpdates = await LocationUpdate.findAll({ include: [{ model: Trip }] }); 
    res.json(locationUpdates);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching location updates', error });
  }
}

export async function getLocationUpdateById(req, res) {
  try {
  const locationUpdate = await LocationUpdate.findByPk(req.params.id, { include: [{ model: Trip }] });
    if (!locationUpdate) return res.status(404).json({ message: 'Location update not found' });
    res.json(locationUpdate);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching location update', error });
  }
}

export async function createLocationUpdate(req, res) {
  try {
    const locationUpdate = await LocationUpdate.create(req.body);
    res.status(201).json(locationUpdate);
  } catch (error) {
    res.status(400).json({ message: 'Error creating location update', error });
  }
}

export async function updateLocationUpdate(req, res) {
  try {
    const [updated] = await LocationUpdate.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Location update not found' });
    const locationUpdate = await LocationUpdate.findByPk(req.params.id, { include: ['Trip'] });
    res.json(locationUpdate);
  } catch (error) {
    res.status(400).json({ message: 'Error updating location update', error });
  }
}

export async function deleteLocationUpdate(req, res) {
  try {
    const deleted = await LocationUpdate.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Location update not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting location update', error });
  }
}