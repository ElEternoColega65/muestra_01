import { Link } from "react-router"
import { styled } from "styled-components"
import { SignUpSchemeType } from "../validationSchemes/signUpScheme"
import SignUpForm from "../components/SignUpForm/SignUpForm"

const PageContainer = styled.div`
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

const MainContent = styled.div`
  max-width: 580px;
  width: 100%;
  margin-bottom: 2rem;
`

const ItemMargin = styled.div`
  margin-bottom: 2rem;
`

const SignUpTitle = styled.h1`
  margin: 0 0 1.3rem 0;
  font-size: 1.2rem;
  text-align: center;
`

const SignUpFooter = styled.div`

`

const LoginLinkOne = styled(Link)`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.borderPrimaryColor};
  width: 100%;
  height: 3rem;
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

const SpanStyled = styled.span`
  position: relative;
  background-color: #ffffff;
  color:rgb(46, 46, 46);
  font-size: 1rem;
  font-weight: 500;
  padding: 0 .5rem;
`

const SignUp = () => {

  const handleSubmitForm = (data: Omit<SignUpSchemeType, "termsAndConditions">) => {
    console.log(data)
  }

  return (
    <PageContainer>
      <Main>
        <MainContent>
          <ItemMargin />
          <SignUpTitle>
            Registrate y podras obtener todas las ventajas
          </SignUpTitle>
          <SignUpForm handleRegister={handleSubmitForm} />
          <SignUpFooter>
            <SpanContainer $marginBottom="1rem">
              <SpanStyled>Ya tengo una cuenta</SpanStyled>
            </SpanContainer>
            <LoginLinkOne to="/login">Iniciar sesión</LoginLinkOne>
          </SignUpFooter>
        </MainContent>
      </Main>
    </PageContainer>
  )
}

export default SignUp