// src/users/pagesUserViewPage.js

import { Link, useParams } from "react-router-dom";
import { Button } from "@/shared";
import { users } from "../data/users";

export default function UserViewPage() {
  const { id } = useParams();

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return <p>Usuario no encontrado</p>;
  }

  return (
    <div className="min-h-screen bg-[url('/src/assets/images/imagen-fondo.png')] bg-cover bg-center flex items-center justify-center">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-[length:var(--text-main)] font-semibold mb-6 text-[color:var(--color-text-primary)]">
          Visualizar Usuario
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-xl font-semibold mb-6">
            Información del usuario
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500">Nombre</p>
              <p>{user.userName}</p>
            </div>

            <div>
              <p className="text-gray-500">Correo</p>
              <p>{user.userEmail}</p>
            </div>

            <div>
              <p className="text-gray-500">Confirmación de Correo</p>
              <p>{user.userEmailConfirmation}</p>
            </div>

            <div>
              <p className="text-gray-500">Correo Empresarial</p>
              <p>{user.userBusinesEmail}</p>
            </div>

            <div>
              <p className="text-gray-500">Confirmación Correo Empresarial</p>
              <p>{user.userBusinesEmailConfirmation}</p>
            </div>

            <div>
              <p className="text-gray-500">Teléfono</p>
              <p>{user.userPhone}</p>
            </div>

            <div>   
              <p className="text-gray-500">Segundo número de contacto</p> 
              <p>{user.userSecondPhone}</p> 
            </div>

            <div>   
              <p className="text-gray-500">Dirección</p> 
              <p>{user.userAddres}</p> 
            </div>

            <div>
              <p className="text-gray-500">Documento</p>
              <p>{user.userDocumentNumber}</p>
            </div>

            <div>
              <p className="text-gray-500">Foto</p>

                <img
                  src={user.userImage}
                  alt="Foto del usuario"
                  // className="w-32 h-32 object-cover rounded-full"
                />
            </div>

            <div>
              <p className="text-gray-500">Estado</p>
              <p>{user.isActive ? "Activo" : "Inactivo"}</p>
            </div>

            <div>
              <p className="text-gray-500">Rol</p>
              <p>{user.isSuperUser ? "Administrador" : "Usuario"}</p>
            </div>

            <div> 
              <p className="text-gray-500">Fecha de inicio laboral</p> 
              <p>{user.workStartDate}</p> 
            </div> 
            
            <div> 
              <p className="text-gray-500">Fecha fin laboral</p> 
              <p>{user.workEndDate}</p> 
            </div>

          </div>

          <div className="mt-8">
            <Link to="/dashboard/userList">
              <Button>Volver</Button>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}