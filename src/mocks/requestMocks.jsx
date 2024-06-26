// mocks/RequestMocks.js
import User from "../models/UserModel"; // Asegúrate de importar correctamente la clase User

// Define usuarios
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

// Define más usuarios según sea necesario
const user3 = new User(
    3,
    'Michael',
    'Johnson',
    'michael.johnson@example.com',
    '456789012',
    'Finance',
    'Chicago',
    'Male',
    35,
    '456-789-0123'
);

const user4 = new User(
    4,
    'Emily',
    'Brown',
    'emily.brown@example.com',
    '890123456',
    'Marketing',
    'San Francisco',
    'Female',
    32,
    '890-123-4567'
);

// Define solicitudes
const requestMocks = [
    {
        id: 1,
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod eros sit amet urna placerat, sed placerat metus ultricies. Nullam scelerisque orci non est pellentesque, eget ultrices erat laoreet. Nam viverra, erat nec egestas tincidunt, tellus elit volutpat diam, in sollicitudin ex magna quis dui. Donec at mauris nec dui convallis accumsan eu id nisi. Maecenas dictum felis sed lorem blandit, id rutrum est egestas. Vestibulum non hendrerit odio. Nam eleifend, velit sit amet auctor ultricies, justo libero venenatis neque, vel tincidunt urna augue ut felis. Integer fringilla mollis urna, sit amet malesuada odio fermentum at. Cras ut tellus in nisi tincidunt auctor. Nulla a metus sem. Ut dignissim, elit eget laoreet convallis, tortor nisl tristique tellus, sed dapibus nisl augue vel erat.',
        user: user1
    },
    {
        id: 2,
        message: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.',
        user: user2
    },
    {
        id: 3,
        message: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
        user: user3
    },
    {
        id: 4,
        message: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
        user: user4
    },
    // Agrega más solicitudes según sea necesario
];

export default requestMocks;
