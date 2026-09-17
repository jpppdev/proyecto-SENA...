import { z } from "zod";

export const inventorySchema = z.object({

    productName: z
        .string()
        .min(3, "El nombre del producto debe tener al menos 3 caracteres"),

    category: z
        .string()
        .min(1, "Seleccione una categoría"),

    sku: z
        .string()
        .optional(),

    description: z
        .string()
        .max(200, "La descripción es demasiado larga")
        .optional(),

    initialQuantity: z
        .string()
        .regex(/^\d+$/, "La cantidad inicial debe contener solo números"),

    unit: z
        .string()
        .min(1, "Seleccione una unidad de medida"),

    minStock: z
        .string()
        .regex(/^\d+$/, "El stock mínimo debe contener solo números"),

    maxStock: z
        .string()
        .regex(/^\d*$/, "El stock máximo debe contener solo números")
        .optional(),

    status: z.boolean(),

    provider: z
        .string()
        .min(1, "Seleccione un proveedor"),

    expirationDate: z
        .string()
        .optional(),

    notes: z
        .string()
        .max(200, "Las notas son demasiado largas")
        .optional(),

});