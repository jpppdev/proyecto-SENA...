// src/shared/services/alertService.js

import Swal from "sweetalert2";

export function showSuccessAlert({
  title = "Éxito",
  text = "",
  confirmButtonText = "Aceptar",
  timer = 1000,
}) {
  return Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonText,
    timer,
    timerProgressBar: true,

    customClass: {
      popup: "rounded-2xl",
      title: "text-green-600",
      confirmButton: "bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg",
    },

    buttonsStyling: false,
  });
}

export function showErrorAlert({
  title = "Error",
  text = "",
  confirmButtonText = "Aceptar",
  timer = 1000,
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