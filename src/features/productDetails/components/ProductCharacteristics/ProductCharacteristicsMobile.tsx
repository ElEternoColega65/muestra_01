import { useContext } from "react";

import { styled } from "styled-components"

import ProductCharacteristicContent from "../ProductCharacteristicContent/ProductCharacteristicContent";
import ProductCharacteristicDescription from "../ProductChracteristicDescription/ProductCharacteristicDescription";
import ProductCharacteristicTechInfosMobile from "../ProductCharacteristicTechInfos/ProductCharacteristicTechInfosMobile";
import ProductCharacteristicImages from "../ProductCharacteristicImages/ProductCharacteristicImages";
import { ProductContext, ProductContextType } from "../../useContext/productContext";

const ProductInfoStyled = styled.div<{ $display: string }>`
  display: ${props => props.$display};
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  overflow-y: scroll;
  padding: 15px 10px 30px;


  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    padding: 4.69vw 3.125vw 9.38vw;
  }
  
  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    padding: 26.25px 17.5px 52.5px;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    padding: 15px 10px 30px;
  }
    

}

`

const InfoCard = styled.div`
  height: 100%;
  // padding-left: 1rem;
  // padding-right: 1rem;
  background-color: white;
`

// const InfoCardScreens = styled(InfoCard)`
//   @media screen and (min-width: 320px) {

//   }
// `

const InfoCardContainer = styled.div`
  padding-bottom: 1rem;
  line-height: 1.2em;
  font-size: 11px;
  
  @media screen and (min-width: 1001px) {
    font-size: 1.1vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 17px;
  }
`

const BackLinkContainer = styled.div`
  width: 100%;
  padding-bottom: 12px;
  z-index: 7779;
  display: flex;
  position: relative;
  justify-content: start;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    padding-bottom: 20px;
  }
`

const BackLink = styled.a`
  font-size: 4.375vw;
  line-height: 1.2;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 4.375vw;
  }
  
  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    font-size: 24.5px;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    font-size: 14px;
  }
    
`

const ArrowImage = styled.img`
  width: 2vw;
  margin-right: .2em;
  flex-grow: 1;
  max-width: 6px;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    max-width: 1.8vw;
  }

   @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    max-width: 10px;
  } 

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    max-width: 6px;
  }

`

interface ProductCharacteristicsMobile {
  sku: string;
  isShow: boolean;
  handleBack: () => void;
}



const ProductCharacteristicsMobile = ({ sku, isShow, handleBack }: ProductCharacteristicsMobile) => {
  const { product, handleCarousel } = useContext(ProductContext) as ProductContextType;

  return (
    <ProductInfoStyled $display={`${isShow ? "flex " : "none"}`}>
      <InfoCard>
        <InfoCardContainer>
          <BackLinkContainer onClick={handleBack}>
            <ArrowImage src="/flecha_izquierda.svg" />
            <BackLink>{`Volver`}</BackLink>
          </BackLinkContainer>
          <div
            style={{ display: sku === "#skuContent" ? "block" : "none" }}
          >
            <ProductCharacteristicContent {...product.content} />
          </div>

          <div
            style={{ display: sku === "#skuDescription" ? "block" : "none" }}
          >
            <ProductCharacteristicDescription {...product.description} />
          </div>

          <div
            style={{ display: sku === "#skuScreens" ? "block" : "none" }}
          >
            <ProductCharacteristicImages altText="ger" screens={product.screens} handleCarousel={handleCarousel} />
          </div>

          <div
            style={{ display: sku === "#skuTechInfos" ? "block" : "none" }}
          >
            <ProductCharacteristicTechInfosMobile {...product.techInfos} />

          </div>
        </InfoCardContainer>
      </InfoCard>

    </ProductInfoStyled>
  )
}


export default ProductCharacteristicsMobile;
