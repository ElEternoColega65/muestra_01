import { z } from "zod";

export const signUpScheme = z
  .object({
    name: z
      .string({ message: "El nombre es requerido" })
      .trim()
      .min(1, "El nombre es requerido")
      .max(40, "El nombre maximo es de 40 caracteres"),

    email: z
      .string()
      .min(1, "El correo electrónico es requerido")
      .email("Introduce una dirección de correo válida"),

    password: z
      .string()
      .regex(/[a-z]/, "Una minúscula")
      .regex(/[A-Z]/, "Una mayúscula")
      .regex(/\d/, "Un número")
      .regex(/[ ñ!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, "Un simbolo")
      .min(12, "La contraseña minima es de 12 caracteres")
      .max(60, "La contraseña maxima es de 60 caracteres"),
    //La contraseña no cumple con los requisitos
    passwordRepeat: z
      .string(),

    termsAndConditions: z
      .boolean()
  })
  .superRefine(({ password, passwordRepeat, termsAndConditions }, ctx) => {
    if (password !== passwordRepeat) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Las contraseñas deben ser iguales",
        path: ["passwordRepeat"]
      })
    }

    if (termsAndConditions !== true) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Debes aceptar la política de privacidad",
        path: ["termsAndConditions"]
      })
    }
  });

// .refine((data) => data.password === data.passwordRepeat, {
//   message: "Las contraseñas deben ser iguales",
//   path: ["passwordRepeat"], // path of error
// });

export type SignUpSchemeType = z.infer<typeof signUpScheme>;

export const passwordOneLowerCaseMinimalSchema = z.object({
  data: z
    .string()
    .regex(/[a-z]/, "Una minúscula")
})

export const passwordOneUpperCaseMinimalSchema = z.object({
  data: z
    .string()
    .regex(/[A-Z]/, "Una miyúscula")
})

export const passwordMinLengthSchema = z.object({
  data: z
    .string()
    .min(12, "La contraseña minima es de 12 caracteres")
})

export const passwordMaxLengthSchema = z.object({
  data: z
    .string()
    .max(60, "La contraseña maxima es de 60 caracteres")
})

export const passwordOneNumberMinimalScheme = z.object({
  data: z
    .string()
    .regex(/\d/, "Un número")
})

export const passwordOneSymbolMinimalScheme = z.object({
  data: z
    .string()
    .regex(/[ ñ!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, "Un simbolo")
})