import { useState } from "react";
import { DataTable, Button } from "@/shared";
import { OrderColumns } from "../table/OrderColumns";
import { Link } from "react-router-dom";

// CORRECCIÓN 1: Asegúrate de que el archivo de datos se llame 'orders.js' en plural
import { orders } from "../data/order"; 

// CORRECCIÓN 2: Importamos el modal desde el módulo de usuarios donde ya existe
import { ReportConfigModal } from "@/features/users";

export default function OrderListPage() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-[length:var(--text-main)] font-semibold mb-4 text-[color:var(--color-text-primary)]">
        Listado de Órdenes
      </h1>

      <div className="flex justify-end items-center gap-4 pb-10">
        <Button onClick={() => setIsReportModalOpen(true)}>
          Reportar orden
        </Button>

        <Link to="/dashboard/orderCreate" className="text-h1 font-heading">
          <Button>Crear orden</Button>
        </Link>
      </div>

      <DataTable data={orders} columns={OrderColumns} />

      <ReportConfigModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </div>
  );
}