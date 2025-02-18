import styled from "styled-components"

const InputEyeSvg = styled.svg`
  cursor: pointer;
`
export const EyeClosedSvg = () => {
  return (
  <InputEyeSvg width="24px" height="24px" viewBox="0 0 24 24">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M12,5 C15.3137085,5 18.6470418,7.33333333 22,12 C18.6470418,16.6666667 15.3137085,19 12,19 C8.6862915,19 5.35295817,16.6666667 
        2,12 C5.35295817,7.33333333 8.6862915,5 12,5 Z M12,7 C9.74542641,7 7.27920147,8.54599157 4.65001476,11.8150908 L4.503,12 L4.65001476,12.1849092 
        C7.194389,15.3485536 9.58614555,16.8984656 11.7811564,16.9951679 L12,17 C14.2545736,17 16.7207985,15.4540084 19.3499852,12.1849092 L19.496,12 
        L19.3499852,11.8150908 C16.805611,8.65144639 14.4138544,7.10153443 12.2188436,7.00483214 L12,7 Z" id="Oval" fill="#000000" fillRule="nonzero"></path>
        <circle id="Oval" fill="#000000" cx="12" cy="12" r="3"></circle>
    </g>
  </InputEyeSvg>
  )
}