// mocks/RequestMocks.js
import User from '../models/RequestModel'; // Asegúrate de importar correctamente la clase User

const user1 = new User(
    1,
    'John',
    'Doe',
    'john.doe@example.com',
    '123456789',
    'IT',
    'New York',
    'Male',
    30,
    '123-456-7890'
);

const user2 = new User(
    2,
    'Jane',
    'Smith',
    'jane.smith@example.com',
    '987654321',
    'HR',
    'Los Angeles',
    'Female',
    28,
    '987-654-3210'
);

// Define 10 users para las 10 solicitudes
const users = [
    user1,
    user2,
    // Define más usuarios según sea necesario
];

// Mock de 10 solicitudes utilizando los usuarios definidos
const requestMocks = [
    {
        id: 1,
        message: 'Request 1',
        user: users[0] // Asigna el primer usuario
    },
    {
        id: 2,
        message: 'Request 2',
        user: users[1] // Asigna el segundo usuario
    },
    // Añade más solicitudes con usuarios correspondientes
];

export default requestMocks;
