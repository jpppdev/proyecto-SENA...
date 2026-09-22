// Importamos la instancia de la aplicacion Express ya configurada.
// app.js debe encargarse de middlewares, rutas y configuraciones generales de la app.
import app from "./app.js";

// Importamos detonv para cargar variables de entrono desde el archivo .env
import dotenv from "dotenv";

//Ejecutamos la carga de variables entorno.
dotenv.config();

// definimos el puerto del servidor
// Se prioriza el valor definido en el entorno ( produccion )
// y se usa 4000 como valor por defecto (desarrollo)
const PORT = process.env.PORT || 4000;

// iniciamos el servidor HTTP usando la app de Express
// listen levanta el servidor y queda a la espera de peticiones
app.listen(PORT, () => {
    // log informativo indicando que el servidor esta corriendo
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
