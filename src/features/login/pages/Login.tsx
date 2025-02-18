import { styled } from "styled-components"

import LoginForm from "../components/LoginForm/LoginForm"
import { LoginSchemaType } from "../validationSchemes/loginSchema"
import { Link } from "react-router"

const PageWrapper = styled.div`
  padding: 0;

  @media screen and (min-width: 801px) {
    padding: 10rem 0 4.2em 0;
  }

    @media screen and (min-width: 1201px) {
    padding: 12rem 0 4.2em 0;
  }

    @media screen and (min-width: 1441px) {
    padding: 10rem 0 2em 0;
  }
`

const Main = styled.main`
  padding: 0 .75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MainContent = styled.section`
  max-width: 580px;
  width: 100%;
`

const ItemMargin = styled.div`
  margin-bottom: 2rem;
`

const SignUpTitle = styled.h1`
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  text-align: left;
  font-weight: 600;
  color: ${props => props.theme.textPrimaryColor}
`

const LoginFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RegisterLinkOne = styled(Link)`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.borderPrimaryColor};
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.textPrimaryColor};
  font-weight: 400;

  &:hover {
    border: 1px solid ${props => props.theme.hoverBorderPrimaryColor};
    color: ${props => props.theme.textPrimaryColor};
  }
`

const SpanContainer = styled.div<{ $marginBottom?: string }>`
  margin-bottom: ${props => props.$marginBottom ? props.$marginBottom : "0"};
  width: 100%;
  position: relative;
  font-size: 1.2rem;
  text-align: center;

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 15px;
    left: 0;
    background: #CCCCCC;
  }
`
const Span = styled.span`
  position: relative;
  background-color: #ffffff;
  padding: 0 .5rem;
`



const Login = () => {
  const handleSubmitForm = (data: LoginSchemaType) => {
    // aqui tendriamos que hacer el dispatch o el usemutation con RTK Query
    console.log("No esta implementado el logeo todavia, solo el formulario con sus respectivos checkeos y validaciones");
    alert(`No esta implementado el logeo todavia, solo el formulario con sus respectivos checkeos y validaciones. Tus datos validados son email: ${data.email} password: ${data.password}`)
  }

  return (
    <PageWrapper id="login">
      <Main>
        <MainContent>
          <ItemMargin />
          <SignUpTitle>
            Iniciar sesión
          </SignUpTitle>
          <LoginForm handleLogin={handleSubmitForm} />
          <LoginFooter>
            <SpanContainer $marginBottom="1rem">
              <Span>¿No estás registrado?</Span>
            </SpanContainer>
            {/* <SpanContainer>Crearte una cuenta, no te llevará más de 2 minutos.</SpanContainer>
            <SpanContainer>Crearte una cuenta, solo te tomara 2 minutos.</SpanContainer> */}
            <RegisterLinkOne style={{ marginBottom: "2rem" }} to="/registro">Crear cuenta</RegisterLinkOne>
            {/* <SimulateErrorButton message="Desde login interno" /> */}
          </LoginFooter>
        </MainContent>
      </Main>
    </PageWrapper>
  )
}

export default Login;