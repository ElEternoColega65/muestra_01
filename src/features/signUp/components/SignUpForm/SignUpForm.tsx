import { useState } from "react"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import styled from "styled-components"

import {
  passwordMaxLengthSchema, passwordMinLengthSchema, passwordOneLowerCaseMinimalSchema,
  passwordOneNumberMinimalScheme, passwordOneSymbolMinimalScheme,
  passwordOneUpperCaseMinimalSchema, signUpScheme, SignUpSchemeType
}
  from "../../validationSchemes/signUpScheme"
import { EyeInputTypeSwitcher } from "../EyeInputTypeSwitcher/EyeInputTypeSwitcher"

import { FieldRequisite } from "../FieldRequisite/FieldRequisite"
import { Link } from "react-router"


const Wrapper = styled.div`
  width: 100%;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`

const FormItemContainer = styled.div<{ $marginBottom: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.$marginBottom};
`

const FormItemPortailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: .5rem;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`

const FormLabel = styled.label`
  padding-bottom: .1rem;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-family: "DM Sans", sans-serif;
`

const FormLabelCheckbox = styled(FormLabel)`
  display: flex;
  justify-content: start;
  align-items: center;
`

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`

const FormInputContainer = styled.div`
  width: 100%;
  position: relative;
`

const FormInput = styled.input`
  border: 1px solid rgb(213 213 213);
  width: 100%;
  height: 3rem;
  margin-bottom: .5rem;
  padding: 1rem;
  font-size: 15px;
  line-height: 1.4;
  border-radius: 4px;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
     border: 1px solid ${props => props.theme.formInputFocusBorderColor};
     border-width: 1px;
  }

  &:focus-visible {
     border: 1px solid ${props => props.theme.formInputFocusBorderColor};
     border-width: 1px;
  }
`

const FormInputError = styled.span`
  font-size: .95rem;
  color: ${props => props.theme.formInputErrorColor};
  text-align: left;
  width: 100%;
  font-weight: 400;
`

const FormPasswordRequisites = styled.ul`
  display: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .26rem;
  color:rgb(22, 32, 58);
  font-size: .97rem;
  font-weight: 400;
`

const TextMobileTablet = styled.span`
  display: block;
  font-size: .9rem;
  font-weight: 400;
  
  color: ${props => props.theme.textSecondaryColor};

  @media (min-width: 1024px) {
    display: none;
  }
`

const SignUpFormButton = styled.button`
  width: 100%;
  height: 3rem;
  border: 0;
  border-radius: 4px;
  background-color: ${props => props.theme.formInputFocusBorderColor};
  color: white;
`

interface Props {
  handleRegister: (user: {
    name: string;
    email: string;
    password: string;
    passwordRepeat: string;
  }) => void
}

const SignUpForm = ({ handleRegister }: Props) => {

  const { register, handleSubmit, watch, setValue, reset, formState: { errors, isSubmitting } } = useForm<SignUpSchemeType>({
    resolver: zodResolver(signUpScheme),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordRepeat: "",
      termsAndConditions: false
    },
    criteriaMode: "all"
  })
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordRepeatVisibility, setPasswordRepeatVisibility] = useState(false);

  const password = watch("password");
  const termsAndConditions = watch("termsAndConditions");

  const handlePasswordVisiblityShow = () => {
    setPasswordVisibility(!passwordVisibility);
  }

  const handlePasswordRepeatVisiblityShow = () => {
    setPasswordRepeatVisibility(!passwordRepeatVisibility);
  }

  const onSubmit: SubmitHandler<SignUpSchemeType> = async (data, e) => {
    e?.preventDefault();
    // console.log(data);
    handleRegister({
      ...data
    })
    // await handleRegister({
    //   ...data
    // });
    reset();
  }

  return (
    <Wrapper>
      <FormStyled id="form-create" onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <FormItemContainer $marginBottom=".5rem" data-testid="form-field">
          <FormLabel htmlFor="user-name">Nombre</FormLabel>
          <FormInput {...register("name", {})} id="user-name" name="name" type="text" autoComplete="off" data-testid="user-name-input" />
          {errors.name && (
            <FormInputError data-testid="name-error-message">{errors.name.message}</FormInputError>
          )}
        </FormItemContainer>

        <FormItemContainer $marginBottom=".5rem" data-testid="form-field">
          <FormLabel htmlFor="user-email">Correo electrónico</FormLabel>
          <FormInput {...register("email", {})} id="user-email" name="email" type="email" autoComplete="off" data-testid="user-email-input"
            data-just-validate-fallback-disabled={false}
            required
          />
          {errors.email && (
            <FormInputError data-testid="email-error-message">{errors.email.message}</FormInputError>
          )}
        </FormItemContainer>

        <FormItemContainer $marginBottom=".5rem"  >
          <FormLabel htmlFor="user-password">Contraseña</FormLabel>
          <TextMobileTablet>
            Tu contraseña debe contener almenos 12 y no mas de 60 caracteres, incluyendo una mínuscula, una mayúscula, un número y un símbolo.
          </TextMobileTablet>
          <FormInputContainer data-testid="form-field">
            <FormInput {...register("password")} id="user-password" name="password" type={passwordVisibility ? "text" : "password"} autoComplete="off"
              data-testid="user-password-input"
            />
            <EyeInputTypeSwitcher handleOnClick={handlePasswordVisiblityShow} currentValue={passwordVisibility} />

            {errors.password && (
              <FormInputError data-testid="password-error-message">La contraseña no cumple con los requisitos</FormInputError>
            )}
          </FormInputContainer>
        </FormItemContainer>

        <FormItemPortailContainer>
          <FormPasswordRequisites>
            <FieldRequisite
              bIsComplete={passwordMinLengthSchema.safeParse({ data: password }).success}
              name="checkbox-min-length"
              text={"Minimo 12 caracteres"}
              dataTestId="password-requisite"
            />
            <FieldRequisite
              bIsComplete={password.length <= 0 ? false : passwordMaxLengthSchema.safeParse({ data: password }).success}
              name="checkbox-min-length"
              text={"Maximo 60 caracteres"}
              dataTestId="password-requisite"
            />
            <FieldRequisite
              bIsComplete={passwordOneLowerCaseMinimalSchema.safeParse({ data: password }).success}
              name="checkbox-lowercase"
              text={"Una minúscula"}
              dataTestId="password-requisite"
            />
            <FieldRequisite
              bIsComplete={passwordOneUpperCaseMinimalSchema.safeParse({ data: password }).success}
              name="checkbox-uppercase"
              text={"Una mayúscula"}
              dataTestId="password-requisite"
            />
            <FieldRequisite
              bIsComplete={passwordOneNumberMinimalScheme.safeParse({ data: password }).success}
              name="checkbox-number"
              text={"Un número"}
              dataTestId="password-requisite"
            />
            <FieldRequisite
              bIsComplete={passwordOneSymbolMinimalScheme.safeParse({ data: password }).success}
              name="checkbox-symbol"
              text={"Un simbolo"}
              dataTestId="password-requisite"
            />

          </FormPasswordRequisites>
        </FormItemPortailContainer>

        <FormItemContainer $marginBottom=".5rem" >
          <FormLabel htmlFor="user-password-repeat">Repetir contraseña</FormLabel>
          <FormInputContainer data-testid="form-field">
            <FormInput {...register("passwordRepeat")} id="user-password-repeat" name="passwordRepeat" type={passwordRepeatVisibility ? "text" : "password"} autoComplete="off" data-testid="user-password-repeat-input" />
            <EyeInputTypeSwitcher handleOnClick={handlePasswordRepeatVisiblityShow} currentValue={passwordRepeatVisibility} />

            {errors.passwordRepeat && (
              <FormInputError data-testid="password-repeat-error-message">{errors.passwordRepeat.message}</FormInputError>
            )}
          </FormInputContainer>
        </FormItemContainer>

        <FormItemContainer $marginBottom="1.5rem" data-testid="terms-and-conditions-form-field">
          <FormLabelCheckbox
            onClick={() => {
              setValue("termsAndConditions", !termsAndConditions, { shouldValidate: true });
            }}
            data-testid="user-terms-and-conditions-label-input"
          >
            <Checkbox {...register("termsAndConditions")} type="checkbox" data-testid="user-terms-and-conditions-input" />
            <label>He leido y acepto la <Link style={{ fontWeight: "600" }} to={"/politica-de-privacidad"}>Politica de Privacidad</Link></label>
          </FormLabelCheckbox>
          {errors.termsAndConditions && (
            <FormInputError data-testid="terms-and-conditions-error-message">{errors.termsAndConditions.message}</FormInputError>
          )}
        </FormItemContainer>

        <FormItemContainer $marginBottom="1.5rem" >
          <SignUpFormButton disabled={isSubmitting}>
            {isSubmitting ? "Registrandose" : "Crear cuenta"}
          </SignUpFormButton>
        </FormItemContainer>
      </FormStyled>
    </Wrapper>
  )
}

export default SignUpForm;


