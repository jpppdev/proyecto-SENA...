import Swal from "sweetalert2"
export function showSuccessAlert({
    //los valores despues del = son valores por defecto
    title= "Exito",
    text= "",
    confirmButtonText = "Aceptar",
    timer = 1000,
}) {
    //Swal.fire() crea el modal
    return Swal.fire({
        icon: "success",
        title,
        text,
        confirmButtonText,
        timer,
        timerProgressBar: true,
        ShowConfirmButton: true,

        customClass: {
            popup: "rounded-2x1",
            title: "texte-green-600",
            confirmButton: "bg-green-600 hover:bg-green700 px-4 py-2 rounded-lg",
        },
        
        buttonsStyling: false,
    })
}

export function showDeleteAlert({
    //los valores despues del = son valores por defecto
    title= "Eliminar",
    text= "",
    confirmButtonText = "Aceptar",
    deleteButtonText = "Eliminar",
    timer = 1000,
}) {
    //Swal.fire() crea el modal
    return Swal.fire({
        icon: "error",
        title,
        text,
        confirmButtonText,
        deleteButtonText,
        timer,
        ShowConfirmButton: true,

        customClass: {
            popup: "rounded-2x1",
            title: "texte-red-600",
            confirmButton: "bg-green-600 hover:bg-red-700 px-4 py-2 rounded-lg",
        },
        
        buttonsStyling: false,
    })
}