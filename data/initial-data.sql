-- Insert Routes (5 routes)
INSERT INTO Routes (routeNumber, start, end, stops, createdAt, updatedAt) VALUES
('1', 'Colombo', 'Kandy', JSON_ARRAY(JSON_OBJECT('name', 'Kadawatha', 'lat', 7.0, 'long', 79.95)), NOW(), NOW()),
('2', 'Colombo', 'Matara', JSON_ARRAY(JSON_OBJECT('name', 'Panadura', 'lat', 6.75, 'long', 79.9)), NOW(), NOW()),
('15', 'Colombo', 'Jaffna', JSON_ARRAY(JSON_OBJECT('name', 'Negombo', 'lat', 7.21, 'long', 79.84)), NOW(), NOW()),
('32', 'Colombo', 'Kataragama', JSON_ARRAY(JSON_OBJECT('name', 'Ratnapura', 'lat', 6.68, 'long', 80.4)), NOW(), NOW()),
('87', 'Colombo', 'Mannar', JSON_ARRAY(JSON_OBJECT('name', 'Puttalam', 'lat', 8.03, 'long', 79.83)), NOW(), NOW());

-- Insert Users (e.g., 1 admin, 5 operators)
INSERT INTO Users (username, password, role, createdAt, updatedAt) VALUES
('admin', '$2b$10$...hashed...', 'admin', NOW(), NOW()), -- Hash password with bcrypt
('op1', '$2b$10$...hashed...', 'operator', NOW(), NOW()),
('op2', '$2b$10$...hashed...', 'operator', NOW(), NOW()),
('op3', '$2b$10$...hashed...', 'operator', NOW(), NOW()),
('op4', '$2b$10$...hashed...', 'operator', NOW(), NOW()),
('op5', '$2b$10$...hashed...', 'operator', NOW(), NOW());

-- Insert Buses (25 buses, 5 per operator)
INSERT INTO Buses (registration, operator, routeId, createdAt, updatedAt) VALUES
('NB-1001', 'op1', 1, NOW(), NOW()),
('NB-1002', 'op1', 1, NOW(), NOW()),
('NB-1003', 'op1', 1, NOW(), NOW()),
('NB-1004', 'op1', 1, NOW(), NOW()),
('NB-1005', 'op1', 1, NOW(), NOW()),
('NB-2001', 'op2', 2, NOW(), NOW()),
-- Continue for op3 (route 15), op4 (route 32), op5 (route 87), totaling 25
('NB-5001', 'op5', 5, NOW(), NOW());

-- Insert Trips (2 trips per bus per day for 7 days = 350 trips)
-- Example for one bus (NB-1001) over 7 days
INSERT INTO Trips (busId, routeId, scheduledStart, scheduledEnd, status, createdAt, updatedAt) VALUES
(1, 1, '2025-09-26 08:00:00', '2025-09-26 11:00:00', 'scheduled', NOW(), NOW()),
(1, 1, '2025-09-26 14:00:00', '2025-09-26 17:00:00', 'scheduled', NOW(), NOW()),
(1, 1, '2025-09-27 08:00:00', '2025-09-27 11:00:00', 'scheduled', NOW(), NOW()),
-- Repeat for all 7 days, then for buses 2-25
(2, 1, '2025-09-26 09:00:00', '2025-09-26 12:00:00', 'scheduled', NOW(), NOW());
-- For 350 trips, automate with a script or tool (e.g., MySQL Workbench) if manual entry is too slow