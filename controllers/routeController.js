import { Route } from '../models/index.js';

export async function getAllRoutes(req, res) {
  try {
    const routes = await Route.findAll();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching routes', error });
  }
}

export async function getRouteById(req, res) {
  try {
    const route = await Route.findByPk(req.params.id);
    if (!route) return res.status(404).json({ message: 'Route not found' });
    res.json(route);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching route', error });
  }
}

export async function createRoute(req, res) {
  try {
    const route = await Route.create(req.body);
    res.status(201).json(route);
  } catch (error) {
    res.status(400).json({ message: 'Error creating route', error });
  }
}

export async function updateRoute(req, res) {
  try {
    const [updated] = await Route.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Route not found' });
    const route = await Route.findByPk(req.params.id);
    res.json(route);
  } catch (error) {
    res.status(400).json({ message: 'Error updating route', error });
  }
}

export async function deleteRoute(req, res) {
  try {
    const deleted = await Route.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Route not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting route', error });
  }
}