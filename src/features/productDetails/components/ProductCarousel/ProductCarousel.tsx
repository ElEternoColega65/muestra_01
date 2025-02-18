import { useContext } from "react"

import { styled } from "styled-components"

import { ProductContext, ProductContextType } from "../../useContext/productContext"

const ProductCarouselStyled = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: 7777;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const MiniGaleryContainer = styled.div`
  margin-right: 2%;
  height: 100%;
  min-width: 75px;
  overflow-y: auto;
  overflow-x: unset;
  z-index: 1000;
  display: none;

  @media screen and (min-width: 801px) {
    display: block;
  }
`

const MiniGaleryItem = styled.div`
  cursor: pointer;
  margin: 1em 0;
  padding: .2em;
  height: 50px;
  width: 75px;
  min-width: 75px;
  border-bottom-style: solid;
  border-bottom-width: 0;
  // transition: border .1s ease-out;
  border-color: orange;
`

const MiniGaleryImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

const GaleryContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 1000;
`

const GaleryContent = styled.div`
  height: 100%;
  flex-grow: 1;
  overflow: hidden;
`

const GaleryArrow = styled.img`
  width: 6.7em;
  padding: 7.6em 1em;
  cursor: pointer;
  color: white;
  user-select: none;

  @media screen and (min-width: 561px) {
    width: 4.7em;
  }

  @media screen and (min-width: 1025px) {
    background-color: aliceblue;
  
    &:hover {
      border: 1px solid grey;
    }
  }
`

const GaleryItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  -webkit-user-select: none;
  user-select: none;
  user-drag: none;
  overflow: hidden;
`

const GaleryImageContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const GaleryItemImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

const GaleryBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .8;
  z-index: 900;
  background-color: #fff;
`

const GaleryFullContent = styled.div`
  position: absolute;
  inset: 2em 4%;
  z-index: 901;
  display: flex;
  align-items: center;
`

const ImageClosed = styled.img`
  cursor: pointer;
  position: absolute;
  top: 1.5vw;
  right: 1.5vw;
  height: 1.46vw;
  width: auto;
  z-index: 901;
`

const ProductCarousel = () => {
  const { product, handleCarousel, imageIndex, handleCurrentImage } = useContext(ProductContext) as ProductContextType;

  const handleCarouselClosed = () => {
    handleCarousel();
  }

  const handlePrevImage = () => {
    if (imageIndex === 0)
      handleCurrentImage(product.screens.length - 1);
    else
      handleCurrentImage(imageIndex - 1);
  }

  const handleNextImage = () => {
    if (product.screens.length - 1 === imageIndex)
      handleCurrentImage(0);
    else
      handleCurrentImage(imageIndex + 1);
  }

  return (
    <ProductCarouselStyled >
      <div>
        <GaleryBackground />
        <div style={{ zIndex: "903", cursor: "pointer", position: "relative" }}>
          <ImageClosed onClick={handleCarouselClosed} src="/menu_orange.svg" />
        </div>
        <div style={{
          width: "100%", height: "100%",
          display: "flex", position: "absolute", top: "0",
          left: "0", right: "0", bottom: "0",
          zIndex: 901
        }}
          onClick={handleCarouselClosed}
        >
        </div>
        <GaleryFullContent onClick={handleCarouselClosed}>

          <MiniGaleryContainer>
            {product.screens.map(({ url640 }, index: number) => {
              return (
                <MiniGaleryItem key={index} style={{ borderBottomWidth: index === imageIndex ? "4px" : "" }}>
                  <GaleryItem
                    onClick={(event) => {
                      event.stopPropagation();
                      handleCurrentImage(index);
                    }}
                  >
                    <GaleryImageContent>
                      <MiniGaleryImage src={url640} />
                    </GaleryImageContent>
                  </GaleryItem>
                </MiniGaleryItem>
              )
            })}
          </MiniGaleryContainer>
          <GaleryContainer>
            <GaleryArrow
              src="/flecha_izquierda.svg"
              onClick={(event) => {
                event.stopPropagation();
                handlePrevImage();
              }}
            />
            <GaleryContent>
              <GaleryItem>
                <GaleryImageContent>
                  <GaleryItemImage src={product.screens[imageIndex].url1920} />
                </GaleryImageContent>
              </GaleryItem>
            </GaleryContent>
            <GaleryArrow
              src="/flecha_derecha.svg"
              onClick={(event) => {
                event.stopPropagation();
                handleNextImage();
              }}
            />
          </GaleryContainer>

        </GaleryFullContent>
      </div>
    </ProductCarouselStyled>
  )
}

export default ProductCarousel;