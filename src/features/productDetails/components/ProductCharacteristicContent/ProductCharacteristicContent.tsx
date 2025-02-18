import { styled } from "styled-components"

const CharacteristicTitle = styled.h2`
  margin: 0 0 4.69vw;
  font-size: 5.625vw;
  line-height: 1.2;
  letter-spacing: -.01em;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    margin: 0 0 4.69vw;
    font-size: 5.625vw;
    padding: 0;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    margin: 0 0 26.25px;
    font-size: 31.5px;
    padding: 0;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    margin: 0 0 15px;
    font-size: 18px;
  }

  @media screen and (min-width: 801px) {
    display: none;
  }
`

const InfoCardParagraph = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.2em;
  font-weight: 900;

  strong {
    font-weight: 900;
  }


  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 3.75vw;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    font-size: 21px;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    font-size: 12px;
  }

  @media screen and (min-width: 801px) {
    font-size: 11px;
  }

  @media screen and (min-width: 1001px) {
    font-size: 1.1vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 19px;
  }
`

const StrongStyled = styled.strong`
  font-size: 14px;
  left: 0;
`

const InfoCardText = styled.span`
  margin: 0;
  line-height: 1.2em;
  font-weight: 300;
`

interface ProductCharacteristicContentProps {
  title?: string;
  text?: string[];
  images?: {
    url: string;
  }[];
}

const ProductCharacteristicContent = ({ title, text, images }: ProductCharacteristicContentProps) => {

  return (
    <>
      <CharacteristicTitle>Contenido</CharacteristicTitle>
      <InfoCardParagraph> <strong>{`${title}`}</strong></InfoCardParagraph>
      <p style={{ margin: "0" }}><br /></p>
      {text && text.map((data: any, index: number) => {
        return <InfoCardParagraph key={index} style={{ position: "relative" }}
        >
          <StrongStyled>{`-`}</StrongStyled>
          <InfoCardText>{` ${data}`}</InfoCardText>
        </InfoCardParagraph>
      })}
      {text && <p style={{ margin: "0" }}><br /></p>}
      {images && images.map((image: { url: string }, index: number) => {
        return <p key={index} style={{ margin: ".5rem 0 0 0" }}>
          <img style={{ maxWidth: "100%", width: "100%" }} src={image.url} />
        </p>
      })}
    </>
  )
}


export default ProductCharacteristicContent;