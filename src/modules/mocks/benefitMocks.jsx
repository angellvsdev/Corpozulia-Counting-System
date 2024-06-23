import User from "../models/UserModel";
import Request from "../models/RequestModel";
import Benefit from "../models/BenefitModel";
import Item from "../models/ItemModel";
// Crear un usuario simulado
// Crear usuarios simulados
const user1 = new User(
    1,
    'John',
    'Doe',
    'john.doe@example.com',
    '123456789',
    'Sector A',
    'Location X',
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
    'Sector B',
    'Location Y',
    'Female',
    25,
    '987-654-3210'
);

// Crear solicitudes simuladas
const request1 = new Request(
    1,
    'Sample request message 1',
    user1
);

const request2 = new Request(
    2,
    'Sample request message 2',
    user2
);

// Crear items simulados
const item1 = new Item(
    1,
    'Item 1',
    'Description for Item 1',
    2,
    []
);

const item2 = new Item(
    2,
    'Item 2',
    'Description for Item 2',
    1,
    []
);

const item3 = new Item(
    3,
    'Item 3',
    'Description for Item 3',
    3,
    []
);

// Array de items para los beneficios
const items1 = [item1, item2];
const items2 = [item2, item3];

// Crear los objetos benefit
const benefit1 = {
    id: 1,
    user: user1,
    details: 'Benefit details 1',
    request: request1,
    status: true,
    items: items1,
    creationDate: new Date()
};

const benefit2 = {
    id: 2,
    user: user2,
    details: 'Benefit details 2',
    request: request2,
    status: false,
    items: items2,
    creationDate: new Date()
};

const benefit3 = {
    id: 3,
    user: user1,
    details: 'Benefit details 3',
    request: request1,
    status: true,
    items: items1,
    creationDate: new Date()
};

// Array con los objetos benefit
const benefits = [benefit1, benefit2, benefit3];

export default benefits;
