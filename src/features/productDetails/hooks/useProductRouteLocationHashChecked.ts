import { useEffect, useState } from "react";
import { useLocation } from "react-router";

/*
  Esto quieres que cambie en funcion de hash actual
*/
export default function useProductRouteLocationHashChecked(hashList: string[]) {
  const location = useLocation();
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const checked = () => {

      for (let x = 0; x < hashList.length; x++) {
        if (hashList[x] === location.hash)
          return setValid(true);
      }
      setValid(false);
    }
    checked();
  }, [location.hash, hashList]);

  return valid;
}