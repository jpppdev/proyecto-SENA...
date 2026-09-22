import { useNavegate } from "react-router-dom";

const navigate = useNavigate();

import {createUser} from "../services/userServices";

const [ isSubmitting, setIsSubmitting] = useState(false);


//==========================================================================//

const handleSubmit = async (e) => {

    // Evita que el formulario recargue la pagina
    e.preventDefault();
    // Validamos los datos del formulario contra el esquema zod
    // safeParse NO lanza excepcion, retorna un objeto controlado
    const result = userShema.safeParse(formData);

    // verificar en consola si el esquema esta funcionando correctamente
    console.log(result);

    // si la validacion falla
    if (!result.success) {
        // objeto donde almacenaremos los errores por campo
        const fielErrors = {};

        // Recorremos cada error generado por Zod
        result.error.issues.forEach((issue)=>{
            // issue.path[0] corresponde al nombre del campo
            // issue.message contiene el mensaje del error  definido en el shema
            fieldErrors[issue.path[0]] = issue.message

        })

        // Actualizamos el estado de errores para mostrarlos en la UI
        setErrors(fieldErrors);
        // cortamos la ejecucion no se envia nada al backend

        return;
    }

    // si la validacion pasa, limpiamos errores previos
    setErrors({});

    // activamos estado de envio (util para desabilitar el boton)
    setIsSubmitting(true);
    try{
        // llamamos el servicio de fronted que consume la api
        //result.data contiene los datos  ya validados por zod
        const response = await createUser(result.data)

        // log informativo para desarrollo
        console.log("usuarios creado;", response);

        //feedback basico del usuario
        alert("usuario creado correctamente");

        // navegamos a la vista anterior
        navigate(-1);
    }catch (error){
        //capturamos errores de red o errores lanzados por service
        console.error("error:", error.message);

        // mostramos el mensaje error al usuario
        alert.apply(error.message);

    }finally {

        //pase lo que pase, desactivamos el estado envio
        setIsSubmitting(false)
    }
};

