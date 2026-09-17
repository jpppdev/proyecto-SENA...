import {z} from "zod";
import {fileSchema} from "@/shared"

export const menuSchema = z.object({
    menuName: z
    .string()
    .min(3, "El nombre del plato debe tener mínimo 3 caracteres")
    .max(100, "El nombre es demasiado largo"),

  category: z
    .string()
    .min(1, "Seleccione una categoría"),

  price: z
    .string()
    .regex(/^\d+$/, "El precio debe contener solo números enteros")
    .min(3, "Ingrese un precio válido"),

  prepTime: z
    .string()
    .regex(/^\d*$/, "El tiempo en minutos debe ser numérico")
    .optional(),

  ingredients: z
    .string()
    .optional(),

  description: z
    .string()
    .max(200, "La descripción no puede exceder 200 caracteres")
    .optional(),

  allergens: z
    .string()
    .optional(),

  // Soporte para foto del plato
  menuImage: fileSchema.pick({ files: true }).shape.files.optional(),

  isActive: z.boolean(),
})