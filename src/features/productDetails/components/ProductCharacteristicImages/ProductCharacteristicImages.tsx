import { styled } from "styled-components"

const ScreensContainer = styled.div`
  // margin: 1.43vw -1%;
  // margin: 0 -1%;
  // padding: 0 6.94vw 0 4.86vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 100%;

  @media screen and (min-width: 801px) {
    margin: 1.43vw -1%;
    margin: 0 -1%;
    padding: 0 6.94vw 0 4.86vw;
    flex-direction: row;
  }

  @media screen and (min-width: 1441px) {
    padding: 0 100px 0 70px;
  }


`

const ScreenContainer = styled.div`
  width: 100%;
  margin: 3.125vw 0 0;
  height: 50vw;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    width: 100%;
    margin: 3.125vw 0 0;
    height: 50vw;
  }

  @media screen and (min-width: 560px) and (max-aspect-ratio: 13 / 9) {
    width: 100%;
    margin: 17.5px 0 0;
    height: 280px;
  }


  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    width: 100%;
    margin: 10px 0 0;
    height: 160px;
    float: left;
  }

  @media screen and (min-width: 801px) {
    width: 23%;
    margin: 1%;
    float: left;
    height: clamp(90.28px, 9.03vw, 130px)
  }
`

const CharacteristicTitle = styled.h2`
  margin: 0 0 4.69vw;
  font-size: 5.625vw;
  line-height: 1.2;
  letter-spacing: -.01em;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    margin: 0 0 4.69vw;
    font-size: 5.625vw;
    padding: 0;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    margin: 0 0 26.25px;
    font-size: 31.5px;
    padding: 0;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    margin: 0 0 15px;
    font-size: 18px;
  }

  @media screen and (min-width: 801px) {
    display: none;
  }
`


const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  -webkit-user-select: none;
  user-select: none;
  overflow: hidden;
  cursor: pointer;
`

const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`

interface ProductCharacteristicImagesProps {
  screens: { url640: string; url1920: string; }[];
  handleCarousel: (index: number) => void;
  altText: string;
}

// alt={`Comprar ${altText} screen ${index + 1}`}

const ProductCharacteristicImages = ({ screens, handleCarousel, altText }: ProductCharacteristicImagesProps) => {

  return (
    <div>
      <CharacteristicTitle>Imagenes</CharacteristicTitle>
      <ScreensContainer>
        {screens && screens.map((screen, index: number) => {
          return (
            <ScreenContainer key={index}>
              <ImageWrapper onClick={() => handleCarousel(index)}>
                <ImageContent>
                  <Image
                    src={screen.url640}
                    alt={`Comprar ${altText} screen ${index + 1}`}
                    loading="lazy"
                  />
                </ImageContent>
              </ImageWrapper>
            </ScreenContainer>
          )
        })}
      </ScreensContainer>
    </div>
  )
}


export default ProductCharacteristicImages;