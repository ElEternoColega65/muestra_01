import { useContext } from "react";

import { styled } from "styled-components";

import { ProductContext } from "../../useContext/productContext";
import { ProductEntity } from "../../entities/productEntity";

const ProductBasicCardMobileStyled = styled.div<{ $display: string }>`
  margin-top: clamp(16px, 5vw, 28px);
  margin-bottom:clamp(16px, 5vw, 28px);
  margin-left: clamp(10px, 3vw, 18px);
  margin-right: clamp(10px, 3vw, 18px);
  display: ${props => props.$display};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(4px, 1vw, 7px);
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(4px, 1vw, 7px);
  margin-bottom: 10px;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.2;
  font-size: 14.6px;
  font-weight: 800;
  letter-spacing: -.01em;
  color: #4a4a4a;

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

const PlatformEdition = styled.span`
  line-height: 1;
  font-size: 11px;
  font-weight: 300;
  line-height: 15px;
  letter-spacing: .04em;
  color: rgb(167 176 179);
  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 3.75vw;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    font-size: 21px;
  }
  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    font-size: 12px;
  }
`

const ImageWrapper = styled.div`
  height: clamp(260px, 81vw, 455px);
  position: relative;

`

const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  -webkit-user-select: none;
  user-select: none;
  overflow: hidden;
`

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`

interface ProductBasicCardMobileProps {
  isShow?: boolean;
}

const ProductBasicCardMobile = ({ isShow }: ProductBasicCardMobileProps) => {
  const product = useContext(ProductContext)?.product as ProductEntity;

  return (
    <ProductBasicCardMobileStyled $display={isShow ? "flex" : "none"}>
      <TextContainer>
        <Title>{`${product.title}`}</Title>
        <PlatformEdition>{`${product.techInfos.platform} ${product.platformEdition ? "(" + product.platformEdition + ")" : ""}`}</PlatformEdition>
      </TextContainer>
      <ImageWrapper>
        <ImageContent>
          <Image draggable={false} src={product.imageUrl} loading="eager" />
        </ImageContent>
      </ImageWrapper>
    </ProductBasicCardMobileStyled>
  )
}

export default ProductBasicCardMobile;