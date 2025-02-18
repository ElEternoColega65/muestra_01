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

const ModeContainer = styled.div`
  margin: 8px 0;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
     margin: 3vw 0;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
     margin: 18px 0;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
     margin: 8px 0;
  }
`

const InfoCardText = styled.span`
  margin: 0;
  line-height: 1.2em;
  font-weight: 300;
`

interface ProductCharacteristicDescriptionProps {
  main: string;
  modes: Array<{
    title: string;
    text: string;
  }>;
}

const ProductCharacteristicDescription = ({ main, modes }: ProductCharacteristicDescriptionProps) => {
  return (
    <>
      <CharacteristicTitle>Descripción</CharacteristicTitle>
      <InfoCardParagraph><InfoCardText>{main}</InfoCardText></InfoCardParagraph>
      <p style={{ margin: "0" }}><br /></p>

      {modes.map((mode, index: number) => {
        return (
          <ModeContainer key={index} >
            <InfoCardParagraph style={{ position: "relative" }}>
              <InfoCardText><strong style={{ fontWeight: "900" }}>{mode.title}</strong></InfoCardText>
            </InfoCardParagraph>
            <p style={{ margin: "0" }}><br /></p>
            <InfoCardParagraph key={index} style={{ position: "relative" }}>
              <InfoCardText>{mode.text}</InfoCardText>
            </InfoCardParagraph>
            <p style={{ margin: "0" }}><br /></p>
          </ModeContainer>
        )
      })}
    </>
  )
}

export default ProductCharacteristicDescription;