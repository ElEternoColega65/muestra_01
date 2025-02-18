import { useContext } from "react";
import { styled } from "styled-components";

import useDetailsCategory from "../../hooks/useDetailsCategory";
import { ProductEntity } from "../../entities/productEntity";
import { ProductContext } from "../../useContext/productContext";
import ProductCharacteristics from "../ProductCharacteristics/ProductCharacteristics";
import ProductGeneralInfo from "../ProductGeneralInfo/ProductGeneralInfo";

const ProductDetailsCardStyled = styled.div`
  display: flex;
  min-width: 280px;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  text-align: left;
  padding: 0;
  width: 60%;
`

const ProductPrice = styled.div`
  margin-top: 0;
  padding: 0 69.44px 0 48.61px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  // height: 100%;
  text-align: left;

  @media screen and (min-width: 1001px) {
    padding: 0 6.94vw 0 4.86vw;
  }

  @media screen and (min-width: 1441px) {
    padding: 0 100px 0 70px;
  }

`;

const ProductInfoTitle = styled.div`
  margin: 1rem 0;
  padding: 0 69.44px 0 48.61px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  // height: 100%;
  text-align: left;

  @media screen and (min-width: 1001px) {
    padding: 0 6.94vw 0 4.86vw;
  }

  @media screen and (min-width: 1441px) {
    padding: 0 100px 0 70px;
  }
`

const InfoTitle = styled.h2`
  margin: 0;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: -.01em;
  font-weight: 900;
  color: #4a4a4a;

  @media screen and (min-width: 1001px) {
    font-size: 1.5vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 22px;
  }
`

const PriceContainer = styled.div`
  font-weight: 700;
  font-size: 38px;
  position: relative;
`

const TextPrevPrice = styled.span`
  position: relative;
  font-weight: 400;
  display: none;
  font-size: 15px;
  letter-spacing: -0.02em;
  color: #4a4a4a;

  &:before {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    width: 100%;
    border-top: .2em solid;
    border-color: #f7566b;
    opacity: .7;
    -webkit-transform: translate(-50%, -50%) rotate(-20deg);
    -moz-transform: translate(-50%, -50%) rotate(-20deg);
    -ms-transform: translate(-50%, -50%) rotate(-20deg);
    -o-transform: translate(-50%, -50%) rotate(-20deg);
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  @media screen and (min-width: 801px) {
    display: inline;
  }


  @media screen and (min-width: 1001px) {
    font-size: 1.5vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 25px;
  }
`

const Price = styled.span`
  font-size: 21px;
  letter-spacing: -0.02em;
  color: #4a4a4a;


  @media screen and (min-width: 1001px) {
    font-size: 2.1vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 30px;
  }
`

const PriceMessage = styled.span`
  font-size: 17px;
  color: rgb(167, 176, 179);
  position: absolute;
  bottom: 11px;
  padding-left: .7rem;
`

const BtnAddedToShoppingCard = styled.button`
  max-width: 460px;
  width: 100%; 
  max-height: 40px; 
  padding: 1rem;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  color: black;
  font-weight: 700;
  font-size: 20px;
`

const BtnContainer = styled.div`
  margin: 1.1vw 0;
`

const ProductDetailsCard = () => {
  const { categoryIndex, handleCategoryIndex } = useDetailsCategory();
  const product = useContext(ProductContext)?.product as ProductEntity;

  return (
    <ProductDetailsCardStyled>
      <ProductPrice>
        <PriceContainer>
          {product.offerPrice && <TextPrevPrice>{`${product.price.toLocaleString("es-ES")}€ `}</TextPrevPrice>}
          <Price>{`${product.offerPrice ? product.offerPrice.toLocaleString("es-ES") : product.price.toLocaleString("es-ES")}€ `} <PriceMessage>Al mejor precio</PriceMessage></Price>
        </PriceContainer>
        <BtnContainer>
          <BtnAddedToShoppingCard onClick={() => alert("El carrito todavia no esta implementado")}>
            <span>Añadir a la cesta</span>
          </BtnAddedToShoppingCard>
        </BtnContainer>
      </ProductPrice>

      <ProductInfoTitle>
        <InfoTitle>{`Comprar ${product.title} ${product.techInfos.platform} en page`}</InfoTitle>
      </ProductInfoTitle>

      <ProductCharacteristics categoryIndex={categoryIndex} handleCategoryIndex={handleCategoryIndex} />
      <ProductGeneralInfo />

    </ProductDetailsCardStyled>
  )
}

export default ProductDetailsCard;