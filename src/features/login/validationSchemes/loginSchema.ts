import { z } from "zod";

export const loginSchema = z
.object({
  email: z
    .string()
    .min(1, "El correo electrónico es requerido")
    .email("Introduce una dirección de correo válida"),
  password: z
    .string()
    .min(1, "El campo es requerido")
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
