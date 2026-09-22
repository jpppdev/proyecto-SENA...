// src/features/users/schemas/userSchema.js
// CORRECIÓN: agrgar campos booleanos

import {z} from "zod";
import { fileSchema } from "@/shared/schemas/fileSchema";

export const userSchema = z.object({
   

    userName: z
        .string()
        .min(3, "El nombre debe de tener minimo 3 caracteres")
        .max(60, "El nombre es demasiado largo"),

    userEmail: z
        .email()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ingresar un email valido"),

    userPhone: z
        .string()
        .regex(/^\d{10}$/, "El número de teléfono debe tener 10 dígitos"),

    userDocumentTypes: z.string().min(1, "El tipo de documento es requerido"),

    userDocumentNumber: z
        .string()
        .min(5, "El número de documento debe tener al menos 5 caracteres")
        .max(20, "El número de documento es demasiado largo"),

    userPassword: z
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .regex(/[A-Z]/, "La contraseña debe tener al menos una letra mayúscula")
        .regex(/[a-z]/, "Debe contener al menos una letra minúscula")
        .regex(/[0-9]/, "Debe contener al menos un número")
        .regex(/[^A-Za-z0-9]/, "Debe contener al menos un character especial"),

    userImage: fileSchema.pick({ files: true}).shape.files.optional(),

    userAvatarUrl: z
        .string()
        .url("la URL del avatar no es valida")
        .nullable()
        .optional(),

    isStaff: z.boolean(),
    isActive: z.boolean(),
    isSuperUser: z.boolean(),

    


});