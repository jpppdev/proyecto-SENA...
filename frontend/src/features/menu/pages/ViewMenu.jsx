import { Link, useParams } from "react-router-dom";
import {
  Utensils,
  DollarSign,
  Image,
  Tag,
  FileText,
  ToggleRight,
} from "lucide-react";

import { Button } from "@/shared";
import { menu } from "../data/menu";

export default function ViewMenu() {
  const { id } = useParams();

  const dish = menu.find(
    (item) => String(item.id) === String(id)
  );

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[color:var(--color-background)]">
        <p className="text-lg font-semibold text-[color:var(--color-text-primary)]">
          Platillo no encontrado
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[url('/src/assets/images/fondo.png')] bg-cover bg-center p-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">

          <div>
            <h1 className="text-3xl font-bold text-[color:var(--color-text-primary)]">
              Visualizar platillo
            </h1>
          </div>

          <Link to="/dashboard/menuList">
            <Button>
              ← Volver a la lista
            </Button>
          </Link>

        </div>


        {/* TARJETA PRINCIPAL */}
        <div className="bg-[color:var(--semantic-brand-light)] rounded-2xl shadow-md p-6 mb-5">

          <div className="flex flex-col lg:flex-row lg:items-center gap-6">

            {/* IMAGEN */}
            <div className="flex-shrink-0">

              <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-[color:var(--semantic-brand)]">

                <img
                  src={dish.menuImage}
                  alt={dish.menuName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

              </div>

            </div>


            {/* INFORMACIÓN PRINCIPAL */}
            <div className="flex-1">

              <h2 className="text-2xl font-bold text-[color:var(--color-text-secondary)] mb-2">
                {dish.menuName}
              </h2>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--semantic-brand)] text-[color:var(--text-inverse)] text-sm font-medium">

                <ToggleRight size={20} />

                {dish.isActive ? "Habilitado" : "Deshabilitado"}

              </div>

            </div>


            {/* PRECIO */}
            <div className="lg:border-l lg:pl-8 min-w-[150px] border-[color:var(--color-border)]">

              <p className="text-sm text-[color:var(--color-text-secondary)] mb-2">
                Precio
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[color:var(--color-background-secondary)]">

                <DollarSign
                  size={20}
                  className="text-[color:var(--semantic-brand)]"
                />

                <span className="text-sm font-medium text-[color:var(--color-text-secondary)]">
                  ${dish.price}
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* PESTAÑAS */}
        <div className="bg-[color:var(--semantic-brand-light)] rounded-2xl shadow-md mb-5">

          <div className="flex items-center">

            <div className="px-6 py-4 text-[color:var(--color-text-secondary)] flex items-center gap-2">

              <Utensils size={20} />

              Información general

            </div>

            <div className="px-6 py-4 text-[color:var(--color-text-secondary)] flex items-center gap-2">

              <Image size={20} />

              Imagen

            </div>

          </div>

        </div>


        {/* CONTENIDO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* INFORMACIÓN DEL PLATILLO */}
          <div className="lg:col-span-2">

            <div className="bg-[color:var(--semantic-brand-light)] rounded-2xl shadow-md p-6">

              <div className="flex items-center gap-3 pb-4 mb-6">

                <Utensils
                  size={20}
                  className="text-[color:var(--semantic-brand)]"
                />

                <div>

                  <h2 className="font-bold text-lg text-[color:var(--color-text-secondary)]">
                    Datos del platillo
                  </h2>

                  <p className="text-sm text-[color:var(--color-text-secondary)]">
                    Información general del menú
                  </p>

                </div>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">

                {/* NOMBRE DEL PLATILLO */}
                <div className="flex gap-3">

                  <Utensils
                    className="text-[color:var(--semantic-brand)] mt-1"
                    size={20}
                  />

                  <div>

                    <p className="text-xs text-[color:var(--color-text-secondary)]">
                      Nombre del platillo
                    </p>

                    <p className="font-medium mt-1 text-[color:var(--color-text-secondary)]">
                      {dish.menuName || "No registrado"}
                    </p>

                  </div>

                </div>


                {/* PRECIO */}
                <div className="flex gap-3">

                  <DollarSign
                    className="text-[color:var(--semantic-brand)] mt-1"
                    size={20}
                  />

                  <div>

                    <p className="text-xs text-[color:var(--color-text-secondary)]">
                      Precio
                    </p>

                    <p className="font-medium mt-1 text-[color:var(--color-text-secondary)]">
                      ${dish.price || "0"}
                    </p>

                  </div>

                </div>


                {/* CATEGORÍA */}
                <div className="flex gap-3">

                  <Tag
                    className="text-[color:var(--semantic-brand)] mt-1"
                    size={20}
                  />

                  <div>

                    <p className="text-xs text-[color:var(--color-text-secondary)]">
                      Categoría
                    </p>

                    <p className="font-medium mt-1 text-[color:var(--color-text-secondary)]">
                      {dish.category || "No registrada"}
                    </p>

                  </div>

                </div>


                {/* ESTADO */}
                <div className="flex gap-3">

                  <ToggleRight
                    className="text-[color:var(--semantic-brand)] mt-1"
                    size={20}
                  />

                  <div>

                    <p className="text-xs text-[color:var(--color-text-secondary)]">
                      Estado
                    </p>

                    <p className="font-medium mt-1 text-[color:var(--color-text-secondary)]">
                      {dish.isActive ? "Habilitado" : "Deshabilitado"}
                    </p>

                  </div>

                </div>


                {/* DESCRIPCIÓN */}
                <div className="flex gap-3 md:col-span-2">

                  <FileText
                    className="text-[color:var(--semantic-brand)] mt-1"
                    size={20}
                  />

                  <div>

                    <p className="text-xs text-[color:var(--color-text-secondary)]">
                      Descripción
                    </p>

                    <p className="font-medium mt-1 break-all text-[color:var(--color-text-secondary)]">
                      {dish.description || "No registrada"}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* IMAGEN */}
          <div className="space-y-5">

            <div className="bg-[color:var(--semantic-brand-light)] rounded-2xl shadow-md p-6">

              <div className="flex items-center gap-3 mb-5">

                <Image
                  size={20}
                  className="text-[color:var(--semantic-brand)]"
                />

                <h2 className="font-bold text-lg text-[color:var(--color-text-secondary)]">
                  Imagen del platillo
                </h2>

              </div>


              <div className="w-full aspect-square rounded-xl overflow-hidden border border-[color:var(--color-border)] bg-[color:var(--color-background-secondary)] flex items-center justify-center">

                {dish.menuImage ? (

                  <img
                    src={dish.menuImage}
                    alt={dish.menuName}
                    className="w-full h-full object-cover"
                  />

                ) : (

                  <div className="text-sm text-[color:var(--color-text-secondary)]">
                    Sin imagen registrada
                  </div>

                )}

              </div>

            </div>


            {/* ACCIONES */}
            <div className="bg-[color:var(--semantic-brand-light)] rounded-2xl shadow-md px-8 p-4">

              <div className="flex flex-col gap-1.5 items-center">

                <Link to={`/dashboard/menuUpdate/${dish.id}`}>

                  <Button>

                    <span className="flex items-center justify-center gap-2">

                      <Utensils size={20} />

                      Actualizar menú

                    </span>

                  </Button>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}