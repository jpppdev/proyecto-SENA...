// src/features/inventory/data/inventory.js

export const inventoryData = [
    {
        id: "INV-001",
        barcode: "7701234567890",
        productName: "Café en grano tostado",
        brand: "Café Quindío",
        accountable: "Juan Pérez",
        quantity: 50,
        minQuantity: 10,
        unitValue: 25000,
        totalValue: 1250000, 
        status: "disponible",
        lotNumber: 1
    },
    {
        id: "INV-002",
        barcode: "7709876543210",
        productName: "Leche Entera Larga Vida",
        brand: "Alquería",
        accountable: "María López",
        quantity: 5,
        minQuantity: 15,
        unitValue: 4500,
        totalValue: 22500,
        status: "agotado",
        lotNumber: 2
    }
];