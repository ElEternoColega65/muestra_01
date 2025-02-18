import { useContext } from "react";

import { styled } from "styled-components"

import ProductCharacteristicTechInfos from "../ProductCharacteristicTechInfos/ProductCharacteristicTechInfos";
import ProductCharacteristicDescription from "../ProductChracteristicDescription/ProductCharacteristicDescription";
import ProductCharacteristicContent from "../ProductCharacteristicContent/ProductCharacteristicContent";
import ProductCharacteristicImages from "../ProductCharacteristicImages/ProductCharacteristicImages";
import { ProductContext, ProductContextType } from "../../useContext/productContext";

const ProductInfoStyled = styled.div`
  margin-top: 1.1vw;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-align: left;
`

const InfoSections = styled.div`
  margin-bottom: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .current {
    background-color: #303030;
    color: white;
  }

  @media screen and (min-width: 1441px) {
    margin-bottom: 35.2px;
  }
`

const InfoSection = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-height: 48px;
  background-color: #d5d5d5;
  font-weight: 900;
  height: clamp(27.78px, 2.78vw, 40px);

  &:not(:last-child) {
    border-right: 1px solid black;
  }
`

const InfoSectionSpan = styled.span`
  line-height: 1.2;
  font-size: 11px;

  @media screen and (min-width: 1001px) {
    font-size: 1.1vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 16px;
  }
`

const InfoCard = styled.div`
  padding: 0 4rem;
`

const InfoCardContainer = styled.div`
  margin-bottom: 1rem;
  line-height: 1.2em;
  font-size: 11px;
  
  @media screen and (min-width: 1001px) {
    font-size: 1.1vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 17px;
  }
`



interface Props {
  handleCategoryIndex: (index: number) => void;
  categoryIndex: number;

}

const ProductCharacteristics = ({ categoryIndex, handleCategoryIndex }: Props) => {
  const { product, handleCarousel } = useContext(ProductContext) as ProductContextType;
  const sections = [];

  if (product.content)
    sections.push("Contenido");

  if (product.screens)
    sections.push("Imágenes");

  if (product.description)
    sections.push("Descripción");

  if (product.techInfos)
    sections.push("Ficha Técnica");

  // product.content ? sections.push("Contenido") : null;
  // product.screens ? sections.push("Imágenes") : null;
  // product.description ? sections.push("Descripción") : null;
  // product.techInfos ? sections.push("Ficha Técnica") : null;

  return (
    <ProductInfoStyled>
      <InfoSections>
        {sections.map((section, index) => {
          return (
            <InfoSection key={index} className={categoryIndex === index ? "current" : ""} onClick={() => handleCategoryIndex(index)}>
              <InfoSectionSpan>{section}</InfoSectionSpan>
            </InfoSection>
          )
        })}
      </InfoSections>

      <InfoCard
        style={{
          display: sections[categoryIndex] === "Contenido" ? "block" : "none"
        }}
      >
        <InfoCardContainer>
          <ProductCharacteristicContent {...product.content} />
        </InfoCardContainer>
      </InfoCard>

      <div
        style={{
          display: sections[categoryIndex] === "Imágenes" ? "block" : "none"
        }}
      >
        <ProductCharacteristicImages
          handleCarousel={handleCarousel}
          screens={product.screens}
          altText={`${product.title} ${product.techInfos.platform} ${product.platformEdition}`}
        />
      </div>

      <InfoCard
        style={{
          display: sections[categoryIndex] === "Descripción" ? "block" : "none"
        }}
      >
        <InfoCardContainer>
          <ProductCharacteristicDescription {...product.description} />
        </InfoCardContainer>
      </InfoCard>

      <InfoCard
        style={{
          display: sections[categoryIndex] === "Ficha Técnica" ? "block" : "none"
        }}
      >
        <InfoCardContainer>
          <ProductCharacteristicTechInfos {...product.techInfos} />
        </InfoCardContainer>
      </InfoCard>


    </ProductInfoStyled>
  )
}

export default ProductCharacteristics;