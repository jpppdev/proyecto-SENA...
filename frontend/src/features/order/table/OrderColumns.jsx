// src/orders/table/OrderColumns.jsx

import OrderRowActions from "@/features/order/components/OrderRowActions";

export const OrderColumns = [
  {
    accessorKey: "id",
    header: "Id",
  },

  {
    accessorKey: "customerName",
    header: "Cliente",
  },

  {
    accessorKey: "date",
    header: "Fecha",
  },

  {
    accessorKey: "time",
    header: "Hora",
  },

  {
    accessorKey: "table",
    header: "Mesa",
  },

  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => {
      const total = row.original.total;

      return `$${total.toLocaleString("es-CO")}`;
    },
  },

  {
    accessorKey: "status",
    header: "Estado",
  },

  {
    id: "actions",
    cell: ({ row }) => (
      <OrderRowActions order={row.original} />
    ),
  },
];