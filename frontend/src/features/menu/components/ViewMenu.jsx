// src/features/menu/components/ViewMenu.jsx

import { Link, useParams } from "react-router-dom";
import { Button } from "@/shared";
import { menu } from "../data/menu";

export default function ViewMenu() {
  const { id } = useParams();

  const dish = menu.find(
    (item) => String(item.id) === String(id)
  );

  if (!dish) {
    return <p>Platillo no encontrado</p>;
  }

  return (
    <div className="min-h-screen bg-[url('/src/assets/images/fondo.png')] bg-cover bg-center flex items-center justify-center">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-[length:var(--text-main)] font-semibold mb-6 text-[color:var(--color-text-primary)]">
          Visualizar Platillo
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8">

          {/* Información del platillo */}
          <h2 className="text-xl font-semibold mb-6">
            Información del platillo
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500">Nombre</p>
              <p>{dish.name}</p>
            </div>

            <div>
              <p className="text-gray-500">Precio</p>
              <p>${dish.price}</p>
            </div>

            <div>
              <p className="text-gray-500">Categoría</p>
              <p>{dish.category}</p>
            </div>

            <div>
              <p className="text-gray-500">Descripción</p>
              <p>{dish.description}</p>
            </div>

          </div>

          {/* Imagen */}
          <div className="mt-8">

            <h2 className="text-xl font-semibold mb-6">
              Imagen
            </h2>

            <img
              src={dish.image}
              alt={dish.name}
              className="w-64 h-64 object-cover rounded-xl"
            />

          </div>

          {/* Acciones */}
          <div className="mt-8 flex gap-4">

            <Link to="/dashboard/menuList">
              <Button>Volver</Button>
            </Link>

            <Link to={`/dashboard/menuUpdate/${dish.id}`}>
              <Button>Actualizar menú</Button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}