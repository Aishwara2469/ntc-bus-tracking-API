import { Trip, Bus, Route } from '../models/index.js';

export async function getAllTrips(req, res) {
  try {
  const trips = await Trip.findAll({ include: [{ model: Bus }, { model: Route }] }); 
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trips', error });
  }
}

export async function getTripById(req, res) {
  try {
  const trip = await Trip.findByPk(req.params.id, { include: [{ model: Bus }, { model: Route }] });
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.json(trip);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trip', error });
  }
}

export async function createTrip(req, res) {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (error) {
    res.status(400).json({ message: 'Error creating trip', error });
  }
}

export async function updateTrip(req, res) {
  try {
    const [updated] = await Trip.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Trip not found' });
    const trip = await Trip.findByPk(req.params.id, { include: ['Bus', 'Route'] });
    res.json(trip);
  } catch (error) {
    res.status(400).json({ message: 'Error updating trip', error });
  }
}

export async function deleteTrip(req, res) {
  try {
    const deleted = await Trip.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Trip not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting trip', error });
  }
}