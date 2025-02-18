import { Link } from "react-router"
import { styled } from "styled-components"

const Box = styled.div`
  position: relative;
  width: 100%;
  height: clamp(360px, 113vw, 630px);
  overflow: hidden;

  @media screen and (min-width: 801px) {
    height: clamp(361.11px, 36.11vw, 520px);
  }
`

const CardSection = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
  top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: clamp(230px, 72vw, 403px);
  z-index: 4;

  @media screen and (min-width: 801px) {
    height: 100%;
    width: 70%;
  }
`

const LinkStyled = styled(Link)`
  width: 100%;
  height: 100%;
`

const ImageItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  // -webkit-user-select: none;
  // user-select: none;
  user-drag: none;
  overflow: hidden;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`

const CardBodyBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 6.18vw 2.77vw 2.77vw;
  padding: 3.125vw;
  width: 100%;
  height: 100%;
  color: rgb(61, 220, 248);
  background-color:rgb(37, 37, 37);
  z-index: 2;

  @media screen and (min-width: 320px) {
    padding: 3.125vw;
  }

  @media screen and (min-width: 560px) {
    padding: 17.5px;
  }

  @media screen and (min-width: 801px) {
    padding: 33.8px 27.7px 27.7px;
    width: 30%;
    top: 0;
    right: 0;
  }

  @media screen and (min-width: 1441px) {
    padding: 89px 40px 40px;
  }
`

const CardBody = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

const CardTitle = styled.h2`
  margin: 0;
  font-size: 7.8125vw;
  line-height: 1.2;
  letter-spacing: -.02em;

  @media screen and (min-width: 561px) {
    font-size: 43.75px;
  }

  @media screen and (min-width: 801px) {
    font-size: 27.77px;
  }

  @media screen and (min-width: 1001px) {
    font-size: 2.77vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 40px;
  }
`

const CardSubTitle = styled.h3`
  margin: .4em 0 0 0;
  font-size: 5.625vw;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -.01em;

  @media screen and (min-width: 561px) {
    font-size: 31.5px;
  }

  @media screen and (min-width: 801px) {
    font-size: 14.6px;
    margin-top: 1em;
  }

  @media screen and (min-width: 1001px) {
    font-size: 1.46vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 21px;
  }
`

const CardBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`

const PosterPricing = styled.div`
  color: rgb(255, 255, 255);

`

const PosterPricingTitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  font-size: 1.04vw;

  @media screen and (min-width: 1441px) {
    font-size: 17px;
  }
`

const PosterPricingPriceContainer = styled.span`
  display: block;  
  font-size: 2.08vw;
  font-weight: 400;
  letter-spacing: -.02em;
  line-height: .8;
  line-height: 1.2;

  @media screen and (min-width: 1441px) {
    font-size: 30px;
  }
`

const PosterPricingPrice = styled.span`
  font-weight: 700;
`

const PosterBottonContainer = styled.div`
  width: 166.66px;
  margin-top: 27.77px;
  border: 1px solid rgb(61, 220, 248);

  @media screen and (min-width: 1441px) {
    width: 240px;
    margin-top: 40px;
  }
`

const PosterBottonLink = styled(Link)`
  position: relative;
  height: clamp(27.78px, 2.78vw, 40px);
  cursor: pointer;
  width: 100%;
  text-align: center;
  transition: color .2s, background-color .2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 900;
  
  @media screen and (min-width: 801px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 13px;
  }

  @media screen and (min-width: 1441px) {
    font-size: 15px;
  }
`

const SmallTitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: #212729b3;
  padding: .6em 1em;

  @media screen and (min-width: 801px) {
    display: none;
  }
`

const SmallTitle = styled.h3`
  margin: 0;
  line-height: 1.2;
  font-size: 4.375vw;
  color: rgb(61, 220, 248);
  font-weight: 400;

  @media screen and (min-width: 561px) {
    font-size: 24.5px;
  }
`

interface Props {
  title: string;
  subTitle: string;
  imageUrl: string;
  imageHref: string;
  posterPricingTitle: string;
  posterPrincingPrice: number;
  btnPoster: string;
}

const BannerCard = ({
  title, subTitle, imageUrl,
  imageHref, posterPricingTitle,
  posterPrincingPrice, btnPoster
}: Props) => {

  return (
    <Box >
      <CardSection>
        <LinkStyled to={imageHref}>
          <ImageItem>
            <ImageContainer>
              <Image draggable={false} src={imageUrl} alt={title} loading="eager" />
            </ImageContainer>
          </ImageItem>
        </LinkStyled>
      </CardSection>
      <CardBodyBox className="card-body">
        <CardBody>
          <div className="title">
            <CardTitle>{title?.toUpperCase()}</CardTitle>
            <CardSubTitle>{subTitle}</CardSubTitle>
          </div>
          <CardBottom className="bottom">
            <PosterPricing className="poster-pricing">
              <PosterPricingTitle>{posterPricingTitle}</PosterPricingTitle>
              <PosterPricingPriceContainer><PosterPricingPrice>{`${posterPrincingPrice}`}</PosterPricingPrice><span>€</span></PosterPricingPriceContainer>
            </PosterPricing>
            <PosterBottonContainer>
              <PosterBottonLink to={imageHref}>
                {btnPoster}
              </PosterBottonLink>
            </PosterBottonContainer>
          </CardBottom>
        </CardBody>
      </CardBodyBox>
      <SmallTitleContainer className="smallTitle">
        <SmallTitle>{title}</SmallTitle>
      </SmallTitleContainer>
    </Box>
  )
}

export default BannerCard;