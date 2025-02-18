import { styled } from "styled-components"
import { Link } from "react-router";
import ProductGeneralInfo from "../ProductGeneralInfo/ProductGeneralInfo";
import { useContext } from "react";
import { ProductContext } from "../../useContext/productContext";
import { ProductEntity } from "../../entities/productEntity";

const Box = styled.div<{ $display: string }>`
  margin-bottom: 1rem;
  display: ${props => props.$display};
`

const PriceAndCart = styled.div`
  // height: clamp(170px, 53vw, 298px);
  margin-bottom: 1rem;
`

const PriceContainer = styled.div`
  // height: clamp(70px, 22vw, 123px);
  padding: 4.69vw 3.125vw 0;
  padding: 15px 10px 0;
  padding: 4.69vw 3.125vw 0;
  margin-bottom: 1rem;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    padding: 4.69vw 3.125vw 0;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    padding: 15px 10px 0;
    margin-bottom: 1rem;
  }
`;

const PriceLabel = styled.span`
  font-size: 3.75vw;
  line-height: 1.2;
  display: block;
  margin-bottom: .3rem;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 3.75vw;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    font-size: 21px;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    font-size: 13px;
  }

`

const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BtnAddedToCard = styled.button`
  width: 100%; 
  height: clamp(40px, 13vw, 70px);
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

const BtnAddedToCardLabel = styled.span`
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

const TitlesAndTitlesDescription = styled.div`
  padding: 0 3.125vw;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    padding: 0 3.125vw;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    padding: 0 17.5px;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    padding: 0 10px;
  }
`

const CharacteristicsContainer = styled.div`
  padding: 0 3.125vw;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    padding: 0 3.125vw;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    padding: 0 17.5px;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    padding: 0 10px;
  }
`

const TitleH2 = styled.h2`
  margin: 0;
  font-size: 5.625vw;
  padding: 3.75vw 0 5vw;
  line-height: 1.2;
  letter-spacing: -.01em;
  text-wrap: initial;
  

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 5.625vw;
    padding: 3.75vw 0 5vw;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    font-size: 31.5px;
    padding: 21px 0 28px;
  }
  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    font-size: 18px;
    padding: 12px 0 16px;
  }
`

const ContentAndDescription = styled.div``

const CharacteristicContainer = styled.div`
  border-top: 1px solid rgb(182, 182, 182);
}
`;

const CharacteristicLink = styled(Link)`
  text-decoration: none;
`;

const CharacteristicContent = styled.div`
  cursor: pointer;
  line-height: 1.2;
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 4.375vw;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 4.375vw;
    padding: 3.75vw 0;
  }

  @media screen and (min-width: 560px) and (max-aspect-ratio: 13 / 9) {
    font-size: 24.5px;
    padding: 21px 0;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    font-size: 14px;
    padding: 12px 0;
  }

  @media screen and ()

`;

const Characteristic = styled.div`
  flex-grow: 1;
`

const CharacteristicLabel = styled.p`
  margin: 0;
  font-weight: 900;
`;
const CharacteristicValue = styled.p`
  margin: 0;
  line-height: 1.2;
  font-size: 4.375vw;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 4.375vw;
  }

  @media screen and (min-width: 560px) and (max-aspect-ratio: 13 / 9) {
    font-size: 24.5px;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    font-size: 14px;
  }
`;

const ArrowImage = styled.img`
  height: 26.25px;
  margin-left: 3.75vw;
  width: auto;
  float: right;
  flex-shrink: 0;
  
  // width: 4%;

  // @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
  //   height: 17.69vw;
  //   margin-left: 3.75vw;
  // }


  // @media screen and (min-width: 560px) and (max-aspect-ratio: 13 / 9) {
  //   height: 88px;
  //   margin-left: 3.75vw;
  // }


  // @media screen and (min-width: 600px) and (max-aspect-ratio: 13 / 9) {
  //   height: 78px;
  //   margin-left: 3.75vw;
  // }

  // @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
  //   height: 44.6px;
  //   margin-left: 12px;
  // }

  // @media screen and (min-width: 500px) and (min-aspect-ratio: 13 / 9) {
  //   height: 34.6px;
  // }

  // @media screen and (min-width: 640px) and (min-aspect-ratio: 13 / 9) {
  //   height: 24.6px;
  // }
`

const TextPrevPrice = styled.span`
  position: relative;
  font-weight: 400;

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



  // @media screen and (min-width: 1001px) {
  //   font-size: 1.5vw;
  // }

  // @media screen and (min-width: 1441px) {
  //   font-size: 25px;
  // }
`


interface ProductDetailsCardMobileProps {
  handleMobileModal: () => void;
  isShow?: boolean;
}


const ProductDetailsCardMobile = ({ handleMobileModal, isShow }: ProductDetailsCardMobileProps) => {
  const product = useContext(ProductContext)?.product as ProductEntity;


  const getCharacteristicCharactersByMaxLength = (characteristic: string, length: number) => {
    let text = "";
    const lengthCharacters = length - 3;

    if (characteristic === "content") {
      const title = product.content?.title as string;

      if (title.length >= lengthCharacters)
        text += title.substring(0, lengthCharacters);
      else
        text += title;

      const lengthNeedToMax = lengthCharacters - text.length;

      if (lengthNeedToMax > 0) {
        const contentText = product.content?.text as any;

        if (contentText.length >= lengthNeedToMax)
          text += contentText.substring(0, lengthNeedToMax);
        else
          text += contentText;
      }
    }
    else {
      const descriptionMain = product.description.main;
      text += descriptionMain.substring(0, lengthCharacters);
    }

    return text + "...";
  }

  return (
    <Box $display={isShow ? "block" : "none"}>
      <PriceAndCart>
        <PriceContainer className="price-container">
          <PriceLabel>
            <span style={{ fontWeight: 900 }}>Precio en page:</span>
            {product.offerPrice && <TextPrevPrice>{` ${product.price.toLocaleString("es-ES")}€ `}</TextPrevPrice>}
            <span>{` ${product.offerPrice ? product.offerPrice.toLocaleString("es-ES") : product.price.toLocaleString("es-ES")}€ `}</span>
            {/* <span>{` ${product.price.toLocaleString("es-ES")}€`}</span> */}
          </PriceLabel>


          <PriceLabel style={{ color: "rgb(167 176 179)" }}><span>Precio en otras webs: {`${(product.price + 5).toLocaleString("es-ES")}€`}</span></PriceLabel>
        </PriceContainer>
        <CartContainer>
          <BtnAddedToCard>
            <BtnAddedToCardLabel>Añadir a cesta <span style={{ fontWeight: 900 }}>{`${product.offerPrice ? product.offerPrice.toLocaleString("es-ES") : product.price.toLocaleString("es-ES")}€ `}</span></BtnAddedToCardLabel>
          </BtnAddedToCard>
        </CartContainer>
      </PriceAndCart>

      <TitlesAndTitlesDescription>
        <TitleH2>
          {`Comprar ${product.title} ${product.techInfos.platform} en page`}
        </TitleH2>
      </TitlesAndTitlesDescription>

      <CharacteristicsContainer>
        <ContentAndDescription>
          {product.content &&
            <CharacteristicContainer>
              <CharacteristicLink onClick={handleMobileModal} to={{ hash: "#skuContent" }}>

                <CharacteristicContent>
                  <Characteristic>
                    <CharacteristicLabel style={{ marginBottom: ".2em" }}>
                      Contenido
                    </CharacteristicLabel>
                    <CharacteristicValue>
                      {
                        getCharacteristicCharactersByMaxLength("content", 114)
                      }
                    </CharacteristicValue>

                  </Characteristic>
                  <ArrowImage src="/flecha_derecha.svg" />
                </CharacteristicContent>
              </CharacteristicLink>
            </CharacteristicContainer>
          }

          {product.description &&
            <CharacteristicContainer>
              <CharacteristicLink onClick={handleMobileModal} to={"#skuDescription"}>
                <CharacteristicContent>
                  <Characteristic>
                    <CharacteristicLabel style={{ marginBottom: ".2em" }}>
                      Descripción
                    </CharacteristicLabel>
                    <CharacteristicValue>
                      {getCharacteristicCharactersByMaxLength("description", 114)}
                    </CharacteristicValue>

                  </Characteristic>
                  <ArrowImage src="/flecha_derecha.svg" />
                </CharacteristicContent>
              </CharacteristicLink>
            </CharacteristicContainer>
          }
        </ContentAndDescription>


        <CharacteristicContainer>
          <CharacteristicLink onClick={handleMobileModal} to={"#skuScreens"}>
            <CharacteristicContent>
              <Characteristic>
                <CharacteristicLabel
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <span style={{ flexGrow: "1" }}>Imágenes</span>
                  <ArrowImage src="/flecha_derecha.svg" />
                </CharacteristicLabel>
              </Characteristic>
            </CharacteristicContent>
          </CharacteristicLink>
        </CharacteristicContainer>

        <CharacteristicContainer style={{ borderBottom: "1px solid rgb(182, 182, 182)" }}>
          <CharacteristicLink onClick={handleMobileModal} to={"#skuTechInfos"}>
            <CharacteristicContent>
              <Characteristic>
                <CharacteristicLabel
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <span style={{ flexGrow: "1" }}>Ficha técnica</span>
                  <ArrowImage src="/flecha_derecha.svg" />
                </CharacteristicLabel>
              </Characteristic>
            </CharacteristicContent>
          </CharacteristicLink>
        </CharacteristicContainer>

        <ProductGeneralInfo />
      </CharacteristicsContainer>

    </Box >
  )
}

export default ProductDetailsCardMobile;