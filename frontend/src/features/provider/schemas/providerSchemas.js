// src/features/providers/schemas/providerSchema.js

import { z } from "zod";
import { fileSchema } from "@/shared/schemas/fileSchema";

export const providerSchema = z.object({
    
    providerName: z
        .string()
        .min(3, "El nombre de la empresa debe tener mínimo 3 caracteres")
        .max(100, "El nombre es demasiado largo"),

    email: z
        .string()
        .email()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ingresar un email válido"),

    phone: z
        .string()
        .regex(/^\d+$/, "El número de contacto debe contener solo números")
        .min(7, "El número debe tener al menos 7 dígitos")
        .max(15, "El número no puede exceder los 15 dígitos"),

    documentType: z
        .string()
        .min(1, "El tipo de documento es requerido"),

    documentNumber: z
        .string()
        .regex(/^\d+$/, "El documento debe contener solo números")
        .min(5, "El número de documento debe tener al menos 5 caracteres")
        .max(15, "El número de documento no puede exceder los 15 caracteres"),

    // Campos opcionales según los requerimientos
    address: z
        .string()
        .optional(),

    products: z
        .string()
        .optional(),

    observations: z
        .string()
        .optional(),

    // Campos booleanos
    isActive: z.boolean(),

    providerImage: fileSchema.pick({ files: true }).shape.files.optional(),

});
