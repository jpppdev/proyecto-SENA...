import { Link, useParams } from "react-router-dom";
import { Button } from "@/shared";
// 1. Importación corregida para coincidir con tu export const providers
import { providers } from "../data/provider"; 

export default function ViewSuppliers() {
  const { id } = useParams();

  // 2. Buscamos en el arreglo correcto
  const supplier = providers.find(
    (item) => String(item.id) === String(id)
  );

  if (!supplier) {
    return <p className="text-center mt-10 text-red-500 font-semibold">Proveedor no encontrado</p>;
  }

  return (
    <div className="min-h-screen bg-[url('/src/assets/images/fondo.png')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto w-full">
        
        <h1 className="text-2xl font-bold mb-6 text-gray-900 drop-shadow-sm">
          Visualizar Proveedor
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-semibold mb-6 border-b pb-2">
            Información general
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-500 text-sm">Tipo de documento</p>
              <p className="font-medium">{supplier.documentType}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Número de documento</p>
              <p className="font-medium">{supplier.documentNumber}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Nombre del proveedor</p>
              {/* 3. Propiedad corregida a providerName */}
              <p className="font-medium">{supplier.providerName}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Número de contacto</p>
              <p className="font-medium">{supplier.phone}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Correo electrónico</p>
              <p className="font-medium">{supplier.email}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Dirección</p>
              <p className="font-medium">{supplier.address}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Estado</p>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                supplier.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {supplier.isActive ? "HABILITADO" : "INHABILITADO"}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Suministro Principal
            </h2>
            {/* 4. Corregido: Ya no usa .map() porque products es un texto simple en tu data */}
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <p className="font-medium text-gray-800">{supplier.products}</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Observaciones
            </h2>
            <p className="text-gray-700">
              {supplier.observations || "Sin observaciones registradas."}
            </p>
          </div>

          <div className="mt-8 flex justify-end">
            <Link to="/dashboard/providerList">
              <Button variant="outlined">Volver a la lista</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}