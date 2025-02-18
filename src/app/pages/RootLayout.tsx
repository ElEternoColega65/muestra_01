import { ErrorBoundary } from "react-error-boundary";
import { Outlet, ScrollRestoration } from "react-router"
import { styled } from "styled-components";

import { StyledComponentThemeProvider } from "../styleComponents/StyledComponentThemeProvider";
import { AppError } from "../components/AppError/AppError";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const PageContainer = styled.div`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 50vh;
`

const toRender = () => {


  return (
    <ErrorBoundary FallbackComponent={AppError}>
      <PageContainer className="container">
        <ScrollRestoration />
        <Header />
        <Outlet />
        <Footer />
      </PageContainer>
    </ErrorBoundary>
  )
}

const RootLayout = () => {

  return (
    <StyledComponentThemeProvider children={toRender()} />
  )
}


export default RootLayout;