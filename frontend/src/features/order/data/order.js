// src/orders/data/orders.js

export const orders = [
  {
    id: 1,
    customerName: "Juan Pérez",
    date: "18/09/2026",
    time: "7:30 PM",
    table: 5,
    total: 45000,

    dishes: [
      {
        name: "Hamburguesa especial",
        quantity: 2,
        price: 20000,
      },
      {
        name: "Gaseosa",
        quantity: 2,
        price: 2500,
      },
    ],

    status: "En preparación",

    observations: "Sin cebolla y con salsa aparte.",
  },

  {
    id: 2,
    customerName: "María López",
    date: "18/09/2026",
    time: "8:00 PM",
    table: 3,
    total: 30000,

    dishes: [
      {
        name: "Pizza personal",
        quantity: 1,
        price: 25000,
      },
      {
        name: "Gaseosa",
        quantity: 1,
        price: 5000,
      },
    ],

    status: "Pendiente",

    observations: "Entregar rápido.",
  },

  {
    id: 3,
    customerName: "Carlos Rodríguez",
    date: "18/09/2026",
    time: "8:30 PM",
    table: 8,
    total: 55000,

    dishes: [
      {
        name: "Pizza familiar",
        quantity: 1,
        price: 40000,
      },
      {
        name: "Papas a la francesa",
        quantity: 1,
        price: 10000,
      },
      {
        name: "Gaseosa",
        quantity: 1,
        price: 5000,
      },
    ],

    status: "Entregada",

    observations: "Cliente solicita cubiertos adicionales.",
  },
];
