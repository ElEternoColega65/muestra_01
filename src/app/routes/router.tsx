import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

import RootLayout from "../pages/RootLayout";

const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Home = lazy(() => import("../../features/home/pages/Home"));
const ProductDetails = lazy(() => import("../../features/productDetails/pages/ProductDetails"));
const News = lazy(() => import("../../features/news/pages/News"));
const Offers = lazy(() => import("../../features/offers/pages/Offers"));
const Tops = lazy(() => import("../../features/tops/pages/Tops"));
const PlaystationFive = lazy(() => import("../../features/playstationFive/pages/PlaystationFive"));
const PlaystationFour = lazy(() => import("../../features/playstationFour/pages/PlaystationFour"));
const XboxSeriesX = lazy(() => import("../../features/xbox/pages/XboxSeriesX"));
const NintendoSwitch = lazy(() => import("../../features/nintendoSwitch/pages/NintendoSwitch"));
const PC = lazy(() => import("../../features/pc/pages/PC"));
const Login = lazy(() => import("../../features/login/pages/Login"));
const SignUp = lazy(() => import("../../features/signUp/pages/SignUp"));




export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        )
      },

      {
        path: "/registro",
        element: (
          <Suspense>
            <SignUp />
          </Suspense>
        )
      },

      {
        path: "/login",
        element: (
          <Suspense>
            <Login />
          </Suspense>
        )
      },
      {
        path: "/novedades",
        element: (
          <Suspense>
            <News />
          </Suspense>
        )
      },
      {
        path: "/tops",
        element: (
          <Suspense>
            <Tops />
          </Suspense>
        )
      },
      {
        path: "/ofertas",
        element: (
          <Suspense>
            <Offers />
          </Suspense>
        )
      },
      {
        path: "/playstation-5",
        element: (
          <Suspense>
            <PlaystationFive />
          </Suspense>
        )
      },
      {
        path: "/playstation-4",
        element: (
          <Suspense>
            <PlaystationFour />
          </Suspense>
        )
      },
      {
        path: "/xbox-series-x",
        element: (
          <Suspense>
            <XboxSeriesX />
          </Suspense>
        )
      },
      {
        path: "/nintendo-switch",
        element: (
          <Suspense>
            <NintendoSwitch />
          </Suspense>
        )
      },

      {
        path: "/pc",
        element: (
          <Suspense>
            <PC />
          </Suspense>
        )
      },
      {
        path: "/producto/:name/:id",
        element: (
          <Suspense>
            <ProductDetails />
          </Suspense>
        ),
        errorElement: <div>Error desde la pagina</div>
      },
      {
        path: "*",
        element: (
          <Suspense>
            <ErrorPage />
          </Suspense>
        )
      }
    ]
  }
])











