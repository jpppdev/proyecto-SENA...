import MenuRowActions from "../components/MenuRowActions";

export const MenuColumns = [
  {
    header: "Imagen",
    accessorKey: "menuImage",
    cell: (info) => (
      <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center shadow-sm">
        <img
          src={info.getValue()}
          alt="Platillo"
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = "https://via.placeholder.com/48?text=Sin+Foto" }}
        />
      </div>
    ),
  },
  {
    header: "Nombre del Plato",
    accessorKey: "menuName",
    cell: (info) => <span className="font-semibold text-gray-900">{info.getValue()}</span>,
  },
  {
    header: "Categoría",
    accessorKey: "category",
    cell: (info) => <span className="text-gray-600">{info.getValue()}</span>,
  },
  {
    header: "Precio",
    accessorKey: "price",
    cell: (info) => (
      <span className="font-medium text-[var(--color-text-primary)]">
        ${info.getValue().toLocaleString()}
      </span>
    ),
  },
  {
    header: "Estado",
    accessorKey: "isActive",
    cell: (info) => {
      const isActive = info.getValue();
      return (
        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
          isActive 
            ? "bg-green-100 text-green-700 border border-green-200" 
            : "bg-red-100 text-red-700 border border-red-200"
        }`}>
          {isActive ? "DISPONIBLE" : "AGOTADO"}
        </span>
      );
    }
  },
  {
    header: "Acciones",
    id: "actions",
    cell: ({ row }) => <MenuRowActions product={row.original} />,
  },
];