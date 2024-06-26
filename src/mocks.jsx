const userMock = {
    id: 1,
    name: "Juan Perez",
    email: "juan.perez@example.com",
    password: "password123",
    idNumber: "12345678",
    sector: "Tecnología",
    location: "Buenos Aires",
    gender: "Masculino",
    age: 30,
    phone: "1234567890",
    creationDate: new Date().toISOString(),
    userType: "Admin"
};
const mockBenefit = {
    id: 1,
    name: "Benefit Example"
  };
  
  const mockItems = [
    {
      id: 1,
      name: "Item 1",
      description: "Description for Item 1",
      quantity: 10,
      benefit: mockBenefit
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description for Item 2",
      quantity: 20,
      benefit: mockBenefit
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description for Item 3",
      quantity: 30,
      benefit: mockBenefit
    }
  ];
export {mockItems, mockBenefit, userMock};