import Swal from "sweetalert2";

export function showCreateUserErrorAlert({
    title = "Error al crear usuario",
    text = "No se pudo crear el usuario.",
    confirmButtonText = "Aceptar",
    timer = 3000,
}) {
    return Swal.fire({
        icon: "error",
        title,
        text,
        confirmButtonText,
        timer,
        timerProgressBar: true,

        customClass: {
            popup: "rounded-2xl",
            title: "text-red-600",
            confirmButton: "bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg",
        },

        buttonsStyling: false,
    });
}