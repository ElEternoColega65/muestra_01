import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { styled } from "styled-components";

const PageContainer = styled.div`
  padding: 0;
  background-color: orange;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`


const Section = styled.section`
  // min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding: 3rem .75rem;
  width: 100%;
  max-width: 1536px;

  @media screen and (min-width: 801px) {
    margin-top: 6rem;
  }

  @media screen and (min-width: 1025px) {
    margin-top: 7rem;
  }

  @media screen and (min-width: 1441px) {
    margin-top: 9rem;
  }
`

const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageErrorContainer = styled.div`
  margin-bottom: 1rem;
  max-height: 200px;
  max-width: 740px;
  width: clamp(300px, 90vw, 740px);
`;

const ImageError = styled.img`
  // max-height: 200px;
  // max-width: 740px;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
`

const TextContainer = styled.div``

const H2 = styled.h2`
  margin: 0 0 1rem 0;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: -0.02em;
  line-height: 1;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 5vw;
  }

  @media screen and (min-width: 425px) and (max-aspect-ratio: 13 / 9) {
    font-size: 4.375vw;
  }

  @media screen and (min-width: 560px) and (max-aspect-ratio: 13 / 9) {
    font-size: 24.5px;
  } 

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9 ) {
    font-size: 20px;
  }

  @media screen and (min-width: 560px) and (min-aspect-ratio: 13 / 9 ) {
    font-size: 24.5px;
  }

  @media screen and (min-width: 801px) {
    font-size: 24.5px;

  }
`

const Paragraph = styled.p`
  font-size: 13px;
  margin: 0;

  &:last-child {
    font-weight: 900;
  }

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 4vw;
  }

  @media screen and (min-width: 425px) and (max-aspect-ratio: 13 / 9) {
    font-size: 17px;
  } 

  @media screen and (min-width: 560px) and (max-aspect-ratio: 13 / 9) {
    font-size: 21px;
  } 

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9 ) {
    font-size: 14px;
  }

  @media screen and (min-width: 425px) and (min-aspect-ratio: 13 / 9 ) {
    font-size: 16px;
  }

  @media screen and (min-width: 560px) and (min-aspect-ratio: 13 / 9 ) {
    font-size: 19px;
  }

  @media screen and (min-width: 801px) {
    font-size: 19px;

  }
`

const Link = styled(NavLink)`
  margin-right: .7rem;
  font-weight: 900;
  // border-bottom: 1px solid black;
  text-decoration: underline;

  &:hover {
    text-decoration-color: white;
  }
`

const Span = styled.span`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 3.125vw;
  }

  @media screen and (min-width: 560px) and (max-aspect-ratio: 13 / 9) {
    font-size: 24.5px;
  } 

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9 ) {
    font-size: 14px;
  }

  @media screen and (min-width: 560px) and (min-aspect-ratio: 13 / 9 ) {
    font-size: 19px;
  }

  @media screen and (min-width: 801px) {
    font-size: 19px;

  }
`

// 777 max-widht imagen.
/* 
  Mi idea es crear un error generico para todos los errores, excepto el de 404
  porque?

  - Para poder tener una diferencia entre un error de no haber encontrado un producto en mi caso
   y un error que pueda ser un error inexperado eso lo manejare desde el errorboundary del RootLayaout
*/


interface Error404Props {
  timeToRedirect: string;
}

const Error404 = ({ timeToRedirect }: Error404Props) => {
  return (
    <ErrorContainer>
      <ImageErrorContainer>
        <ImageError src="/game_over.svg" />
      </ImageErrorContainer>
      <TextContainer>
        <H2>Error 404</H2>
        <Paragraph>!Ups! No hemos podido encontrar la página</Paragraph>
        <Paragraph>{`Seras redirigido a la home en ${timeToRedirect}s ...`}</Paragraph>
      </TextContainer>
    </ErrorContainer>
  )
}


interface ErrorGenericProps {
  timeToRedirect: string;
}

const ErrorGeneric = ({ timeToRedirect }: ErrorGenericProps) => {
  return (
    <ErrorContainer>
      <ImageErrorContainer>
        <ImageError src="/game_over.svg" />
      </ImageErrorContainer>
      <TextContainer>
        <H2>!Ups! ha ocurrido un error inexperado</H2>
        {/* <Paragraph>!Ups! No hemos podido encontrar la página</Paragraph> */}
        <Paragraph>{`Seras redirigido a la home en ${timeToRedirect}s ...`}</Paragraph>
      </TextContainer>
    </ErrorContainer>
  )
}

interface CustomErrorProps {
  pageStyled?: { [key: string]: string };
}

const ErrorPage = ({ pageStyled }: CustomErrorProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [timeToRedirect, setTimeToRedirect] = useState(15);

  useEffect(() => {
    if (location.pathname !== "/error") {
      navigate("/error", { replace: true });
      return;
    }

    if (document.title !== "Game Over | Page")
      document.title = "Game Over | Page";

    if (timeToRedirect <= 0)
      navigate("/", { replace: true });
  }, [timeToRedirect, location.pathname, navigate])

  setTimeout(() => {
    setTimeToRedirect(timeToRedirect - 1);
  }, 1000);

  if (location.pathname !== "/error") return <></>

  return (
    <PageContainer style={{ ...pageStyled }}>
      <Section>
        <SectionContent>
          {location.state?.isError404 && <Error404 timeToRedirect={timeToRedirect.toString()} />}
          {!location.state?.isError404 && <ErrorGeneric timeToRedirect={timeToRedirect.toString()} />}
        </SectionContent>
        <SectionContent>
          <ErrorContainer>
            <TextContainer>
              <H2>Quizás buscabas:</H2>

              <Span>
                <Link to="/tops">Tops</Link>
                <Link to="/novedades">Novedades</Link>
                <Link to="/ofertas">Ofertas</Link>
                <Link to="/playstation-5">PS5</Link>
                <Link to="/playstation-4"> PS4</Link>
                <Link to="/xbox-series-x" >Xbox </Link>
                <Link to="/nintendo-switch">Switch</Link>
                <Link to="/pc">PC</Link>
              </Span>
            </TextContainer>
          </ErrorContainer>
        </SectionContent>
      </Section>


    </PageContainer >
  )
}

export default ErrorPage;