import { useContext } from "react";

import { styled } from "styled-components";

import { ProductContext } from "../../useContext/productContext";
import { ProductEntity } from "../../entities/productEntity";

const InfoCardColumn = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

const IncludesContainer = styled.div`
  margin-bottom: 1rem;
  line-height: 1.2;
  font-size: 5.625vw;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 4.375vw;
  }

  @media screen and (min-width: 560px) and (max-aspect-ratio: 13 / 9) {
    font-size: 24.5px;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    font-size: 14px;
  }

  @media screen and (min-width: 1001px) {
    font-size: 1.1vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 17px;
  }
`

const InfoCardDetail = styled(IncludesContainer)`
  display: flex;
  align-items: center;
  gap: .4em;
  margin-bottom: .2rem;

  @media screen and (min-width: 801px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1001px) {
    margin-bottom: .1rem;
  }

  @media screen and (min-width: 1241px) {
    margin-bottom: .3rem;
  }
`

const InfoCardDetailLabel = styled.div`
  font-weight: 300;
  flex-grow: 0;
  padding: .2rem 0;

  strong {
    font-weight: 900;
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
  }
`

const InfoCardDetailValue = styled.div`
  flex-grow: 1;

  @media screen and (min-width: 801px) {
    font-size: 11px;
  }

  @media screen and (min-width: 1001px) {
    font-size: 1.1vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 16px;
  }
`

const DetailValueSpan = styled.span`
  @media screen and (min-width: 801px) {
    font-size: 11px;
  }

  @media screen and (min-width: 1001px) {
    font-size: 1.1vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 16px;
  }
`

const ProductGeneralInfo = () => {
  const product = useContext(ProductContext)?.product as ProductEntity

  return (
    <InfoCardColumn>
      <InfoCardDetail >
        <InfoCardDetailLabel >
          <span ><strong>Fabricante:</strong></span>
        </InfoCardDetailLabel>
        <InfoCardDetailValue style={{ flexGrow: "1" }}>
          <DetailValueSpan >{product.techInfos.maker}</DetailValueSpan>
        </InfoCardDetailValue>
      </InfoCardDetail>

      {product.techInfos.developer &&
        <InfoCardDetail >
          <InfoCardDetailLabel >
            <span ><strong>Desarrollador:</strong></span>
          </InfoCardDetailLabel>
          <InfoCardDetailValue style={{ flexGrow: "1" }}>
            <DetailValueSpan >{product.techInfos.developer}</DetailValueSpan>
          </InfoCardDetailValue>
        </InfoCardDetail>
      }

      {product.publisher &&
        <InfoCardDetail >
          <InfoCardDetailLabel >
            <span ><strong>Editor:</strong></span>
          </InfoCardDetailLabel>
          <InfoCardDetailValue style={{ flexGrow: "1" }}>
            <DetailValueSpan >{product.publisher}</DetailValueSpan>
          </InfoCardDetailValue>
        </InfoCardDetail>

      }

      <InfoCardDetail>
        <InfoCardDetailLabel style={{ flexGrow: "0" }}>
          <span ><strong>Género:</strong></span>
        </InfoCardDetailLabel>
        <InfoCardDetailValue style={{ flexGrow: "1" }}>
          {product.techInfos.genres.map((genre: string, index: number) => {
            if (product.techInfos.genres.length - 1 === index)
              return <DetailValueSpan key={index}>{`${genre} `}</DetailValueSpan>

            return <DetailValueSpan key={index}>{`${genre}, `}</DetailValueSpan>
          })}
        </InfoCardDetailValue>
      </InfoCardDetail>

      {product.techInfos.franchise && <InfoCardDetail >
        <InfoCardDetailLabel >
          <span><strong>Franquicia:</strong></span>
        </InfoCardDetailLabel>
        <InfoCardDetailValue style={{ flexGrow: "1" }}>
          <DetailValueSpan>{`${product.techInfos.franchise}`}</DetailValueSpan>
        </InfoCardDetailValue>
      </InfoCardDetail>
      }
    </InfoCardColumn>
  )
}

export default ProductGeneralInfo;