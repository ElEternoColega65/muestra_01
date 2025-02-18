import { styled } from "styled-components";
import { useContext } from "react";
import { ProductContext, ProductContextType } from "../../useContext/productContext";

const ProductBasicCardStyled = styled.div`
  display: flex;
  width: 40%;
  min-width: 280px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  text-align: left;

`;

const BasicCardText = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const BasicCardFranchise = styled.h3`
  margin: 0;
  font-size: 11px;
  font-weight: 300;
  line-height: 1.2;

  @media screen and (min-width: 1058px) {
    font-size: 1.04vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 15px;
    // margin: 0;
  }
`

const BasicCardTitle = styled.h1`
  margin: .25em 0;
  line-height: 1.2;
  font-size: 14.6px;
  font-weight: 800;
  letter-spacing: -.01em;
  color: #4a4a4a;


  @media screen and (min-width: 1001px) {
    font-size: 1.46vw;  
  }

  @media screen and (min-width: 1441px) {
    font-size: 21px;
  }
`

const BasicCardPlatformEdition = styled.span`
  line-height: 1;
  font-size: 11px;
  font-weight: 300;
  line-height: 15px;
  color: rgb(167 176 179);

  @media screen and (min-width: 1058px) {
    font-size: 1.04vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 15px;
    // margin: 0;
  }
`

const BasicCardImage = styled.div`
  height: clamp(212.5px, 31.25vw, 350px);
  min-height: clamp(212.5px, 31.25vw, 350px);
  max-width: 460px;
  width: 100%;

  @media screen and (min-width: 1121px) {
    height: clamp(312.5px, 31.25vw, 450px);
    min-height: clamp(212.5px, 31.25vw, 450px);
  }
`

const CardImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  -webkit-user-select: none;
  user-select: none;
  // user-drag: none;
  overflow: hidden;

  @media screen and (min-width: 1441px) {
    height: 100%;
  }
`;

const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

const ContentSticky = styled.div`
  position: sticky;
  padding: 0 45.1px 0 69.4px;
  top: 13.9027vw;
  min-width: 280px;

  @media screen and (min-width: 1001px) {
    padding: 0 4.51vw 0 6.94vw;
  }

  @media screen and (min-width: 1128px) {
    top: 157px;
  }

  @media screen and (min-width: 1441px) {
    padding: 0 65px 0 100px;
    top: 157px !important;
  }
`

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`


const ProductBasicCard = () => {
  const { product } = useContext(ProductContext) as ProductContextType;

  return (
    <ProductBasicCardStyled>
      <Content>
        <ContentSticky>
          <ContentColumn>
            <BasicCardText>
              <BasicCardFranchise><span>{product.techInfos.franchise}</span></BasicCardFranchise>
              <BasicCardTitle>{`${product.title}`}</BasicCardTitle>
              <BasicCardPlatformEdition>{`${product.techInfos.platform} ${product.platformEdition ? "(" + product.platformEdition + ")" : ""}`}</BasicCardPlatformEdition>
            </BasicCardText>
            <BasicCardImage>
              <CardImageContainer>
                <CardImage draggable={false} src={product.imageUrl} loading="eager" />
              </CardImageContainer>
            </BasicCardImage>
          </ContentColumn>
        </ContentSticky>
      </Content>
    </ProductBasicCardStyled>
  )
}

export default ProductBasicCard;