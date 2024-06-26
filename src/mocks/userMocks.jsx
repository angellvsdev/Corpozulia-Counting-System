// mocks/UserMocks.js
import User from '../models/User'; // Asegúrate de importar la clase User si no lo has hecho

const userMocks = [
    new User(1, 'John', 'Doe', 'john.doe@example.com', '123456789', 'IT', 'New York', 'Male', 30, '123-456-7890'),
    new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '987654321', 'Finance', 'Los Angeles', 'Female', 28, '987-654-3210'),
    new User(3, 'Michael', 'Johnson', 'michael.johnson@example.com', '567891234', 'Marketing', 'Chicago', 'Male', 35, '567-891-2340'),
    new User(4, 'Emily', 'Brown', 'emily.brown@example.com', '432109876', 'HR', 'Houston', 'Female', 32, '432-109-8760'),
    new User(5, 'William', 'Davis', 'william.davis@example.com', '789012345', 'Operations', 'San Francisco', 'Male', 33, '789-012-3450'),
    new User(6, 'Olivia', 'Martinez', 'olivia.martinez@example.com', '210987654', 'Sales', 'Miami', 'Female', 29, '210-987-6540'),
    new User(7, 'James', 'Wilson', 'james.wilson@example.com', '654321098', 'Engineering', 'Seattle', 'Male', 31, '654-321-0980'),
    new User(8, 'Sophia', 'Lopez', 'sophia.lopez@example.com', '345678901', 'Customer Support', 'Dallas', 'Female', 27, '345-678-9010'),
    new User(9, 'Alexander', 'Garcia', 'alexander.garcia@example.com', '901234567', 'Research', 'Boston', 'Male', 34, '901-234-5670'),
    new User(10, 'Isabella', 'Rodriguez', 'isabella.rodriguez@example.com', '456789012', 'Product Management', 'Austin', 'Female', 26, '456-789-0120')
];

export default userMocks;
