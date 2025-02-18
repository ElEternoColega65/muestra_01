import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import styled from "styled-components"
import { loginSchema, LoginSchemaType } from "../../validationSchemes/loginSchema"
import { EyeInputTypeSwitcher } from "../EyeInputTypeSwitcher/EyeInputTypeSwitcher"

const Wrapper = styled.div`
  width: 100%;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`

const FormItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: .5em;
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

const SubmitFormButton = styled.button`
  width: 100%;
  height: 2.5rem;
  border: 0;
  border-radius: 4px;
  background-color: ${props => props.theme.formInputFocusBorderColor};
  color: white;

  &:hover {
    background-color: ${props => props.theme.hoverFormBtnBgPrimaryColor};
  }
`

const ItemMargin = styled.div`
  margin-bottom: 1rem;
`

interface Props {
  handleLogin: (user: {
    email: string;
    password: string;
  }) => void
}

const LoginForm = ({ handleLogin }: Props) => {

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    criteriaMode: "all"
  })

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handlePasswordVisiblityShow = () => {
    setPasswordVisibility(!passwordVisibility);
  }

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data, e) => {
    e?.preventDefault();
    handleLogin({
      ...data
    })
    reset();
  }

  return (
    <Wrapper>
      <FormStyled id="form-login" onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <FormItemContainer data-testid="form-field">
          <FormLabel htmlFor="user-email">Correo electrónico</FormLabel>
          <FormInput {...register("email", {})} id="user-email" name="email" type="email" autoComplete="off"
            data-just-validate-fallback-disabled={false}
            required
          />
          {errors.email && (
            <FormInputError data-testid="input-error-message">{errors.email.message}</FormInputError>
          )}
        </FormItemContainer>

        <FormItemContainer >
          <FormLabel htmlFor="user-password">Contraseña</FormLabel>
          <FormInputContainer data-testid="form-field">
            <FormInput {...register("password")} id="user-password" name="password" type={passwordVisibility ? "text" : "password"} autoComplete="off"
            />
            <EyeInputTypeSwitcher handleOnClick={handlePasswordVisiblityShow} currentValue={passwordVisibility} />
            {errors.password && (
              <FormInputError data-testid="input-error-message">{errors.password.message}</FormInputError>
            )}
          </FormInputContainer>
        </FormItemContainer>

        <ItemMargin />

        <FormItemContainer>
          <SubmitFormButton disabled={isSubmitting}>
            {isSubmitting ? "Logeandose" : "Iniciar sesión"}
          </SubmitFormButton>
        </FormItemContainer>

        <ItemMargin />
      </FormStyled>
    </Wrapper>
  )
}

export default LoginForm;




