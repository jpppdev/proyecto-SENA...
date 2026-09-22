// Importamos el servicio de usuarios.
//El controller NO implementa logica de negocio,
//solo delega la operacion al service correspondiente.
import { userService } from "./user.service.js";

// Exportamos un objet controlador.
//Agrupar handlers en un objeto permite escalabilidad
//(create, update, delete, getBYID, ETC.)

export const userController = {

    //Metodo encargado de manejar la creacion de un usuario.
    // Se asume que este metodo sera usada como handler de una ruta Express.
    async createUser(req, res) {

        //log del cuerpo de la peticion
        // Util en desarrollo para validar que el frontend encia correctamente los datos
        // en produccion suele reemplazarse por logging estructurado o eliminarse
        console.log("BODY RECIBIDO", req.body); // CLAVE

        try {
            // llamamos al servicio de usuario, pasando los datos recividos
            // Aqui ocurre la logica real del negocia(validaciones, presistencia, etc.)

            const user = await userService.createUser(req.body);

            // Respuesta HTTP en caso de exito
            // 201. recurso creado correctamente segun el estadar REST
            res.status(201).json({
                // Mensaje informativo para el cliente
                message:"Usuario creado correctamente",

                // Retornamos unicamente el ID del usuario creado
                // Evita exponer informacion sensible innesaria
                userId: user.id,
            })

        
        }catch (err) {

            //Captamos cualquier error lanzado por el service o capas inferiores
            //se registra el error completo para depuracion en backend

            console.error("ERROR BACKEND:", err);

            //Respuesta HTTP de error generico
            // 500: error interno del servidor

            res.status(500).json({
                //Se envia el mensaje del error para diagnostico
                // En produccion suele mapearse a mensaje controlados
                error: err.message,

            });
            }
        },
    };