
import dotenv from 'dotenv';
import pkg from 'jsonwebtoken';
const { verify } = pkg;
dotenv.config();

export default (roles = []) => (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'No token' });

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if (roles.length && !roles.includes(decoded.role)) return res.status(403).json({ message: 'Forbidden' });
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};