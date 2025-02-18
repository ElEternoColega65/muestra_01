import { styled } from "styled-components"

const TechInfosWrapper = styled.div`

`

const TechInfosTable = styled.table`
  width: 100%;
  user-select: none;
  border-collapse: collapse;
  
  @media screen and (min-width: 1441px) {
    // margin: 21px auto;
  }
`

const TechInfosTableBody = styled.tbody``

const TechInfosTableColumn = styled.tr`
  height: 2.78vw;

  @media screen and (min-width: 1441px) {
    height: 40px;
  }

  &:nth-child(odd) {
    background:rgb(231, 228, 228);
  }
`

const TechInfosTableRow = styled.td`
  font-size: 1.04vw;
  font-weight: 300;
  padding: 1.04vw;
  line-height: 1.2;
  flex-grow: 0;

  &:first-child {
    width: 42%;
    font-weight: 900;
  }

  &:last-child {
    width: 58%;
  }

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 801px) {
    font-size: 11px;
  }

  @media screen and (min-width: 1001px) {
    font-size: 1.1vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 16px;
    padding: 15px;
  }

`

interface ProductTechInfoProps {
  fieldName: string;
  fieldValue: string | string[] | number;
}

const ProductTechInfo = ({ fieldName, fieldValue }: ProductTechInfoProps) => {
  return (
    <TechInfosTableColumn>
      <TechInfosTableRow>{fieldName}</TechInfosTableRow>
      <TechInfosTableRow>
        {typeof fieldValue === "string" || typeof fieldValue === "number"
          ? typeof fieldValue === "number"
            ? <span><a href="/">{fieldValue.toString()}</a></span>
            : <span><a href="/">{fieldValue}</a></span>
          : fieldValue.map((value, index) => {
            if (fieldValue.length - 1 === index)
              return <span key={index}><a href="/">{value}</a></span>
            return <span key={index}><a href="/">{`${value}, `}</a></span>

          })
        }
      </TechInfosTableRow>
    </TechInfosTableColumn>

  )

}

interface ProductCharacteristicTechInfosProps {
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

const ProductCharacteristicTechInfos = ({
  platform, genres, voiceLanguages, textLanguages,
  maker, developer, imported, pegi, region
}: ProductCharacteristicTechInfosProps) => {

  return (
    <TechInfosWrapper>
      <TechInfosTable>
        <TechInfosTableBody>
          <ProductTechInfo fieldName="Plataforma:" fieldValue={platform} />
          <ProductTechInfo fieldName="Género:" fieldValue={genres} />
          {voiceLanguages && <ProductTechInfo fieldName="Idiomas Voces:" fieldValue={voiceLanguages} />}
          {textLanguages && <ProductTechInfo fieldName="Idiomas Textos:" fieldValue={textLanguages} />}
          <ProductTechInfo fieldName="Fabricante:" fieldValue={maker} />
          {developer && <ProductTechInfo fieldName="Desarrollador:" fieldValue={developer} />}
          {imported && <ProductTechInfo fieldName="Importación:" fieldValue="Sí" />}
          <ProductTechInfo fieldName="PEGI:" fieldValue={pegi} />
          <ProductTechInfo fieldName="Región:" fieldValue={region} />
        </TechInfosTableBody>
      </TechInfosTable>
    </TechInfosWrapper>
  )
}

export default ProductCharacteristicTechInfos;