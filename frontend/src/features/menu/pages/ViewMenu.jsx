import { Link, useParams } from "react-router-dom";
import { Button } from "@/shared";
import { menu } from "../data/menu";

export default function ViewMenu() {
  const { id } = useParams();

  const dish = menu.find(
    (item) => String(item.id) === String(id)
  );

  if (!dish) {
    return <p className="text-center mt-10 text-[color:var(--color-text-primary)]">Platillo no encontrado</p>;
  }

  return (
    <div className="min-h-screen bg-[url('/src/assets/images/fondo.png')] bg-cover bg-center flex items-center justify-center p-4">

      <div className="max-w-4xl mx-auto w-full">

        <h1 className="text-[length:var(--text-main)] font-semibold mb-6 text-[color:var(--color-text-primary)] drop-shadow-sm">
          Visualizar Platillo
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8">

          {/* Información del platillo */}
          <h2 className="text-xl font-semibold mb-6 text-[color:var(--color-text-primary)] border-b pb-2">
            Información del platillo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500 text-sm">Nombre del plato</p>
              <p className="font-medium text-gray-900">{dish.menuName}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Categoría</p>
              <p className="font-medium text-gray-900">{dish.category}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Precio</p>
              <p className="font-medium text-gray-900">${dish.price}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Tiempo de preparación</p>
              <p className="font-medium text-gray-900">{dish.prepTime} minutos</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-500 text-sm">Ingredientes</p>
              <p className="font-medium text-gray-900">{dish.ingredients}</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-500 text-sm">Descripción</p>
              <p className="text-gray-800">{dish.description}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Alérgenos</p>
              <p className="font-medium text-gray-900">{dish.allergens || "Ninguno registrado"}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Estado en Menú</p>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold inline-block mt-1 ${
                dish.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {dish.isActive ? "DISPONIBLE" : "AGOTADO"}
              </span>
            </div>

          </div>

          {/* Imagen */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-[color:var(--color-text-primary)] border-b pb-2">
              Imagen de Referencia
            </h2>
            <div className="w-64 h-64 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
              <img
                src={dish.menuImage}
                alt={dish.menuName}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/256?text=Sin+Imagen" }}
              />
            </div>
          </div>

          {/* Acciones */}
          <div className="mt-8 flex gap-4 justify-end border-t pt-6">
            <Link to="/dashboard/menuList">
              <Button variant="outlined">Volver al listado</Button>
            </Link>

            <Link to={`/dashboard/menuUpdate/${dish.id}`}>
              <Button className="bg-[var(--color-text-primary)] !text-[var(--color-background)]">
                Actualizar menú
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}