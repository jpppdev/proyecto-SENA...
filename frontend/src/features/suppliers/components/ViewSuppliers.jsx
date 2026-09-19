// src/suppliers/pagesSupplierViewPage.js

import { Link, useParams } from "react-router-dom";
import { Button } from "@/shared";
import { suppliers } from "../data/suppliers";

export default function SupplierViewPage() {
  const { id } = useParams();

  const supplier = suppliers.find(
    (item) => String(item.id) === String(id)
  );

  if (!supplier) {
    return <p>Proveedor no encontrado</p>;
  }

  return (
    <div className="min-h-screen bg-[url('/src/assets/images/fondo.png')] bg-cover bg-center flex items-center justify-center">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-[length:var(--text-main)] font-semibold mb-6 text-[color:var(--color-text-primary)]">
          Visualizar Proveedor
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8">

          {/* Información general */}
          <h2 className="text-xl font-semibold mb-6">
            Información general
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500">Tipo de documento</p>
              <p>{supplier.documentType}</p>
            </div>

            <div>
              <p className="text-gray-500">Número de documento</p>
              <p>{supplier.documentNumber}</p>
            </div>

            <div>
              <p className="text-gray-500">Nombre del proveedor</p>
              <p>{supplier.supplierName}</p>
            </div>

            <div>
              <p className="text-gray-500">Número de contacto</p>
              <p>{supplier.phone}</p>
            </div>

            <div>
              <p className="text-gray-500">Correo electrónico</p>
              <p>{supplier.email}</p>
            </div>

            <div>
              <p className="text-gray-500">Dirección</p>
              <p>{supplier.address}</p>
            </div>

            <div>
              <p className="text-gray-500">Estado</p>
              <p>{supplier.isActive ? "Habilitado" : "Inhabilitado"}</p>
            </div>

          </div>

          {/* Productos */}
          <div className="mt-8">

            <h2 className="text-xl font-semibold mb-6">
              Productos del inventario asociados
            </h2>

            <div className="space-y-4">

              {supplier.products.map((product, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4"
                >
                  <p>{product}</p>
                </div>
              ))}

            </div>

          </div>

          {/* Observaciones */}
          <div className="mt-8">

            <h2 className="text-xl font-semibold mb-6">
              Observaciones
            </h2>

            <p>
              {supplier.observations || "Sin observaciones"}
            </p>

          </div>

          {/* Volver */}
          <div className="mt-8">

            <Link to="/dashboard/supplierList">
              <Button>Volver</Button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}