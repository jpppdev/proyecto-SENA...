// src/features/inventory/table/InventoryColumns.jsx

// Descomentaremos esto en el siguiente paso cuando creemos los botones del ojo, lápiz y basura para el inventario
import InventoryRowActions from "../components/InventoryRowActions";

export const InventoryColumns = [
  {
    accessorKey: "barcode",
    header: "Código",
  },
  {
    accessorKey: "productName",
    header: "Producto",
  },
  {
    accessorKey: "brand",
    header: "Marca",
  },
  {
    accessorKey: "quantity",
    header: "Stock",
  },
  {
    accessorKey: "unitValue",
    header: "Valor Unitario",
    // Esta función formatea el número para que se vea como moneda (ej. $ 25.000)
    cell: ({ row }) => {
      const value = row.getValue("unitValue");
      return `$ ${value.toLocaleString("es-CO")}`;
    }
  },
  {
    accessorKey: "status",
    header: "Estado",
    // Aquí podrías agregar un diseño especial (como una pastilla de color verde o roja) dependiendo de si está "disponible" o "agotado"
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          status === 'disponible' ? 'bg-green-100 text-green-700' : 
          status === 'agotado' ? 'bg-red-100 text-red-700' : 
          'bg-yellow-100 text-yellow-700'
        }`}>
          {status.toUpperCase()}
        </span>
      );
    }
  },
  {
    id: "acciones",
    header: "Acciones",
    cell: ({ row }) => {
      
      const product = row.original;
      
      
      return <InventoryRowActions product={product} />;
    },
  },
];