import { Link, useParams } from "react-router-dom";
import { Button } from "@/shared";
import { orders } from "../data/order"; 

export default function OrderViewPage() {
  const { id } = useParams();

  const order = orders.find((item) => String(item.id) === String(id));

  if (!order) {
    return <p>Orden no encontrada</p>;
  }

  return (
    <div className="min-h-screen bg-[url('/src/assets/images/imagen-fondo.png')] bg-cover bg-center flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-[length:var(--text-main)] font-semibold mb-6 text-[color:var(--color-text-primary)]">
          Visualizar Orden
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8">
          {/* Información general */}
          <h2 className="text-xl font-semibold mb-6">
            Información general
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-gray-500">Número de orden</p>
              <p>{order.id}</p>
            </div>
            <div>
              <p className="text-gray-500">Cliente</p>
              <p>{order.customerName}</p>
            </div>
            <div>
              <p className="text-gray-500">Fecha</p>
              <p>{order.date}</p>
            </div>
            <div>
              <p className="text-gray-500">Hora</p>
              <p>{order.time}</p>
            </div>
            <div>
              <p className="text-gray-500">Mesa</p>
              <p>{order.table}</p>
            </div>
            <div>
              <p className="text-gray-500">Total</p>
              <p>${order.total}</p>
            </div>
          </div>

          {/* Platillos */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-6">Platillos</h2>
            <div className="space-y-4">
              {order.dishes.map((dish, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-500">Platillo</p>
                      <p>{dish.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Cantidad</p>
                      <p>{dish.quantity}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Precio</p>
                      <p>${dish.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estado */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-6">Estado</h2>
            <p>{order.status}</p>
          </div>

          {/* Observaciones */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-6">Observaciones</h2>
            <p>{order.observations || "Sin observaciones"}</p>
          </div>

          {/* Volver */}
          <div className="mt-8">
            <Link to="/dashboard/orderList">
              <Button>Volver</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}