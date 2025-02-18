import { ErrorBoundary } from "react-error-boundary";
import { AppRouter } from "./app/routes";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AppError } from "./app/components/AppError/AppError";


/*  
  Teniendo el ErrorBoundary en el RootLayaout no en pricipio segun mi criterio no seria 
  necesario ademas hacer este ErrorBoundary de aplicacion.
  Dado que react router por defecto tiene un ErrorBoundary envolviendo todas las rutas.
  pero lo dejo asi por si acaso
*/
export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={AppError}>
      <AppRouter />
    </ErrorBoundary>
  );
};
