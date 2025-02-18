import { MouseEvent } from "react"
import { Link } from "react-router"
import { styled } from "styled-components"

const CardStyled = styled.article`
  position: relative;
  width: 100%;
  min-height: 300px;
  border-right: 1px solid rgb(195, 195, 195, .45);
  cursor: pointer;

  @media screen and (min-width: 801px) {

    &:hover {
      background: #baf5c7;
  
      .buttons-container {
        opacity: 1;
        transition: opacity .2s;
      }
    }
  }

`

const LinkStyled = styled(Link)`
  display: block;
  width: 100%;
  min-height: 300px;
`

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FigureStyled = styled.figure`
  padding: 0;
  margin: 1rem 0 0 0;
  padding-left: .75rem;
  padding-right: .75rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  max-height: 200px;
  user-select: none;
`

const ImageContainer = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardBody = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-size: .875rem;
  line-height: 1.25rem;
  gap: .5rem;
  text-align: left;
  padding: 16px 1rem 0 1rem;
  width: 100%;
`

const ImgStyled = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  vertical-align: middle;
  max-height: 200px;
`

const TitleH2 = styled.h2`
  color: #303030;
  font-size: 15px;
  font-weight: 900;
  margin: 0;
  width: 100%;
  height: 2.6em;
  overflow: hidden;
  line-height: 1.2;
`

const TextPrevPrice = styled.span`
  position: relative;
  font-weight: 400;
  display: none;

  &.offer-price:before {
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
`

const ButtonsContainer = styled.div`
  opacity: 0;
  transition: opacity .1s;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 8;
  max-width: 260px;
  background-color: #22272a;
  box-shadow: 0 0 5px #2f3436cc;
  display: none;

  @media screen and (min-width: 801px) {
    display: block;
  }

`

const ButtonsContent = styled.div`
  max-height: 80px;
  height: 80px;
`

const ButtonAddToCart = styled.span`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #72cb9e;
  font-weight: 900;

  &:hover {
    background-color: #a4dbb0;
  }
`

const ButtonDetails = styled.span`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #72cb9e;
  font-weight: 900;

  &:hover {
   color: #a4dbb0;
  }
`

const ButtonAddToCartMobile = styled(ButtonAddToCart)`

  @media screen and (min-width: 801px) {
    display: none;
  }
`

const PriceText = styled.span`
  font-weight: 900;
  display: none;

  @media screen and (min-width: 801px) {
    display: inline;
  }
`

interface VideoGameCardProps {
  title: string;
  textPrevPrice: string;
  price: string;
  offerPrice?: string;
  imageUrl: string;
  path: string;
  platformComplete?: string;
}

const ProductCard = ({
  title, price, textPrevPrice, imageUrl,
  path, platformComplete, offerPrice
}: VideoGameCardProps) => {

  const handleAddToCart = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    alert("Añadir al carrito todavia no esta implementado");
  }

  return (
    <CardStyled >
      <LinkStyled to={path}>
        <CardContent>
          <FigureStyled>
            <ButtonsContainer className="buttons-container">
              <ButtonsContent>
                <ButtonAddToCart onClick={event => handleAddToCart(event)}>Añadir a cesta</ButtonAddToCart>
                <ButtonDetails>Ver detalles</ButtonDetails>

              </ButtonsContent>
            </ButtonsContainer>
            <ImageContainer>
              <ImgStyled draggable={false} src={imageUrl} alt={title} loading="eager" />
            </ImageContainer>
          </FigureStyled>

          <CardBody>
            <div>
              <TitleH2>{title} <span style={{ fontWeight: 400 }}>{platformComplete}</span>
              </TitleH2>
            </div>
            <div >
              <TextPrevPrice className={`${offerPrice ? "offer-price" : ""}`}> {offerPrice ? price : textPrevPrice} </TextPrevPrice>
              <PriceText style={{ fontWeight: 900 }}>{`${offerPrice ? offerPrice : price}€`}</PriceText>
              <ButtonAddToCartMobile onClick={event => handleAddToCart(event)}>{`${offerPrice ? offerPrice : price}€`}</ButtonAddToCartMobile>
            </div>
          </CardBody>
        </CardContent>
      </LinkStyled>
    </CardStyled>
  )
}

export default ProductCard;