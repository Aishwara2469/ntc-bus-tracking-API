import { Bus, Route } from '../models/index.js';

export async function getAllBuses(req, res) {
  try {
  const buses = await Bus.findAll({ include: [{ model: Route }] }); 
    res.json(buses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching buses', error });
  }
}

export async function getBusById(req, res) {
  try {

   if (!req.params.id) return res.status(400).json({ message: 'busId is required' });

    const bus = await Bus.findByPk(req.params.id, { include: [{ model: Route }] });
    if (!bus) return res.status(404).json({ message: 'Bus not found' });

    res.json(bus);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching bus', error });
  }
}

export async function createBus(req, res) {
  try {
    const { operatorId, routeId, registration } = req.body;

    if (!operatorId) return res.status(400).json({ message: 'operatorId is required' });
    if (!routeId) return res.status(400).json({ message: 'routeId is required' });
    if (!registration) return res.status(400).json({ message: 'registration is required' });

    const bus = await Bus.create({ registration, operatorId, routeId: routeId || null });
    res.status(201).json(bus);
  } catch (error) {
    res.status(400).json({ message: 'Error creating bus', error });
  }
}

export async function updateBus(req, res) {
  try {
    
    const updateData = { ...req.body };
    if (updateData.operator) return res.status(400).json({ message: 'operator username not accepted; provide operatorId' });
    const [updated] = await Bus.update(updateData, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Bus not found' });
    const bus = await Bus.findByPk(req.params.id, { include: ['Route'] });
    res.json(bus);
  } catch (error) {
    res.status(400).json({ message: 'Error updating bus', error });
  }
}

export async function deleteBus(req, res) {
  try {
    const deleted = await Bus.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Bus not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting bus', error });
  }
}