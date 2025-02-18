import { styled } from "styled-components"

const TechInfosWrapper = styled.div`

`

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

const InfosItem = styled.div`
  padding: 12px 0 7px;
  border-bottom: 1px solid rgb(218, 218, 218);

  &:last-child {
    border-bottom: 0;
  }

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    padding: 3.75vw 0 2.19vw;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    padding: 21px 0 12.25px;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    padding: 12px 0 7px;
  }
`

const InfoTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  line-height: 1.2;
  padding-bottom: 10px;
  
  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    padding-bottom: 3.125vw;
    font-size: 4.375vw;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    padding-bottom: 17.5px;
    font-size: 24.5px;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    padding-bottom: 10px;
    font-size: 14px;
  }
`


const InfoValue = styled.li`
  margin-bottom: 3px;
  margin-left: 8px;
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  align-items: center;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    margin-bottom: .94vw;
    font-size: 4.375vw;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    margin-bottom: 5.25px;
    font-size: 24.5px;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    margin-bottom: 3px;
    font-size: 14px;
  }
`

interface ProductCharacteristicTechInfosMobileProps {
  platform: string;
  genres: string[];
  voiceLanguages?: string[];
  textLanguages?: string[];
  maker: string;
  pegi: string;
  region: string;
  developer?: string;
  imported?: boolean;
}

const ProductCharacteristicTechInfosMobile = ({
  platform, genres, voiceLanguages, imported,
  textLanguages, maker, developer, pegi, region
}: ProductCharacteristicTechInfosMobileProps) => {


  return (
    <TechInfosWrapper>
      <CharacteristicTitle>Ficha técnica</CharacteristicTitle>

      <InfosItem>
        <InfoTitle>Plataforma</InfoTitle>
        <ul>
          <InfoValue>{`- ${platform}`}</InfoValue>
        </ul>
      </InfosItem>

      <InfosItem>
        <InfoTitle>Género</InfoTitle>
        <ul>
          {genres.map((genre, index) => {
            return <InfoValue key={index}>{`- ${genre}`}</InfoValue>
          })}
        </ul>
      </InfosItem>

      {voiceLanguages &&
        <InfosItem>
          <InfoTitle>Idiomas Voces</InfoTitle>
          <ul>
            {voiceLanguages.map((voiceLanguage, index) => {
              return <InfoValue key={index}>{`- ${voiceLanguage}`}</InfoValue>
            })}
          </ul>
        </InfosItem>
      }

      {textLanguages &&
        <InfosItem>
          <InfoTitle>Idiomas Texto</InfoTitle>
          <ul>
            {textLanguages.map((textLanguage, index) => {
              return <InfoValue key={index}>{`- ${textLanguage}`}</InfoValue>
            })}
          </ul>
        </InfosItem>
      }

      <InfosItem>
        <InfoTitle>Fabricante</InfoTitle>
        <ul>
          <InfoValue>{`- ${maker}`}</InfoValue>
        </ul>
      </InfosItem>

      {developer &&
        <InfosItem>
          <InfoTitle>Desarrollador</InfoTitle>
          <ul>
            <InfoValue>{`- ${developer}`}</InfoValue>
          </ul>
        </InfosItem>
      }

      {imported &&
        <InfosItem>
          <InfoTitle>Importación</InfoTitle>
          <ul>
            <InfoValue>{`- Sí`}</InfoValue>
          </ul>
        </InfosItem>
      }

      <InfosItem>
        <InfoTitle>PEGI</InfoTitle>
        <ul>
          <InfoValue>{`- ${pegi}`}</InfoValue>
        </ul>
      </InfosItem>

      <InfosItem>
        <InfoTitle>Región</InfoTitle>
        <ul>
          <InfoValue>{`- ${region}`}</InfoValue>
        </ul>
      </InfosItem>

    </TechInfosWrapper>
  )
}

export default ProductCharacteristicTechInfosMobile;