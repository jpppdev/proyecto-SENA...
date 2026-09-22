// URL base de endpoint de usarios en el backend
// En desarrollo apunta al servidor Express local
// En produccion deberia provenir de variables de entrono

const API_URl = "http://localhost:400/api/users";

// funcion para cerar un usario en el backend
// Recibe un objeto con los datos del usuario
// retorna la respuesta JSON del servidor

export async function createUser(userData){

    //Realizamos la peticion HTTP uasando fetch
    const response = await fetch(API_URl,{

// Método HTTP según convención REST
        method: "POST",

    //Cabeceras de la petición
    // Indicamos que enviamos JSON
    headers: {
        "content-Type": "application/json",
    },

    // convertimos el objeto userData a JSON
    body: JSON.stringify(userData),

    });

    // Verificamos si la respuesta NO fue exitosa (stats != 2xx)
    if (!response.ok) {
        // Leemos el cuerpo de la respuesta de error
        const error = await response.json();


        // Lanzamos una excepcion con el mensaje error
        // Esto permite que el componente que llama maneje el error con try
        throw new Error(error.error || "Error al crear usuario");
    }

    // Si la petición fue exitosa, retornamos la respuesta parseada como JSON
    return response.json();

}







})