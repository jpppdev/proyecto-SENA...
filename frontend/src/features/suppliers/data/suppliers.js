// src/suppliers/data/suppliers.js

export const suppliers = [
  {
    id: 1,
    documentType: "NIT",
    documentNumber: "900123456-1",
    supplierName: "Distribuciones La 20",
    products: [
      "Pan Brochet",
      "Pan Perro",
      "Papas a la francesa",
    ],
    phone: "3001234567",
    email: "distribucionesla20@gmail.com",
    address: "Carrera 20 #15-30",
    isActive: true,
    observations: "Proveedor principal de productos para cocina.",
  },

  {
    id: 2,
    documentType: "NIT",
    documentNumber: "901234567-2",
    supplierName: "Bebidas del Café",
    products: [
      "Gaseosa",
      "Agua",
      "Jugo de naranja",
    ],
    phone: "3019876543",
    email: "bebidasdelcafe@gmail.com",
    address: "Calle 10 #8-25",
    isActive: true,
    observations: "Realiza entregas dos veces por semana.",
  },

  {
    id: 3,
    documentType: "Cédula",
    documentNumber: "1088123456",
    supplierName: "Carlos Gómez",
    products: [
      "Pizza personal",
      "Pizza familiar",
      "Queso mozzarella",
    ],
    phone: "3124567890",
    email: "carlosgomez@gmail.com",
    address: "Carrera 12 #20-15",
    isActive: false,
    observations: "Proveedor temporal.",
  },
];