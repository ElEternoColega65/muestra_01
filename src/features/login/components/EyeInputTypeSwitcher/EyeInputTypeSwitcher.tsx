import styled from "styled-components"
import { EyeClosedSvg } from "../EyeClosedSvg/EyeClosedSvg";
import { EyeOpenSvg } from "../EyeOpenSvg/EyeOpenSvg";



const InputEye = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  right: 1.25rem;
  top: 0.7rem;
  position: absolute;
`

interface Props {
  handleOnClick: () => void;
  currentValue: boolean;
}

export const EyeInputTypeSwitcher = ({handleOnClick, currentValue}: Props) => {
  
  return (
    <>
    { currentValue 
      ? (<InputEye onClick={handleOnClick}>
          <EyeClosedSvg />
        </InputEye>)
      : (<InputEye onClick={handleOnClick}>
          <EyeOpenSvg/>
        </InputEye>)
    }
    </>
  )
}