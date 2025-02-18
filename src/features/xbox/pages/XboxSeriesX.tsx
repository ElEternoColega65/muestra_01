import styled from "styled-components";
import VideoGamesCarousel from "../components/VideoGamesCarousel/VideoGamesCarousel";
import usePageUpdateTitle from "../hooks/usePageUpdateTitle";

// Router Wrapper
const MainContent = styled.main<{ $minHeight?: string }>`
  // min-height: 100vh;
  min-height: ${props => props.$minHeight ? props.$minHeight : "100vh"};
  display: block;
  max-width: 1920px;
  margin: 0 auto;
`

const Sections = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MenuMarginTop = styled.div`
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-top: 1rem;
  width: 100%;

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9){
    margin-top: 1.4rem;
  }

  @media screen and (min-width: 801px) {
    margin-top: 7rem;
  }

  @media screen and (min-width: 1081px) {
    margin-top: 8rem;
  }

  @media screen and (min-width: 1281px) {
    margin-top: 9rem;
  }

  // @media screen and (min-width: 1441px) {
  //     margin-top: 9rem;
  // }

`

const MainTitle = styled.h1`
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -.02em;
  color: #2f373a;

  @media screen and (min-width: 356px) and (max-aspect-ratio: 13 / 9){
    font-size: 5.625vw;
  }

  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9){
    font-size: 31.5px;
  }

  @media screen and (min-width: 801px) {
    font-size: 20.8px;
    padding: 2.5rem 0 3.5rem;
  }

  @media screen and (min-width: 1001px) {
    font-size: 2.08vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 30px;
  }

`

const SectionStyled = styled.section`
  margin: 0;
  padding: 0;
  flex: 0 0 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SectionVideoGames = styled(SectionStyled)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


`

const SectionContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  @media screen and (min-width: 801px) {
    background-color: #dff0ff;
  }
`

const SwiperMultiContent = styled.div`
  max-width: 100%;
  padding: 0;

  @media (min-width: 360px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 1280px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (min-width: 1660px) {
    max-width: 1660px;
    padding: 0;
  }
`

const BannerContainer = styled.div`

  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`

const TitleContainer = styled.div`
  width: 100%;
  display: block;
  padding: 0 10px;
  text-align: center;
`

const TitleH2 = styled.h2`
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -.02em;
  color:rgb(0, 0, 0);
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: 801px) {
    text-align: center;
  }

  @media screen and (min-width: 1001px) {
    font-size: 1.8vw;
  }

  @media screen and (min-width: 1441px) {
    font-size: 26px;
  }
`

const XboxSeriesX = () => {
  const title = "Juegos Xbox Series X/S: Compra o haz tu Reserva | page";
  usePageUpdateTitle(document.title !== title, title);

  return (
    <MainContent>
      <Sections>
        <MenuMarginTop />
        <MainTitle>JUEGOS XBOX SERIES X/S</MainTitle>
        <SectionVideoGames>
          <SectionContent>
            <TitleContainer>
              <TitleH2>¡YA DISPONIBLES EN XBOX SERIES X/Y!</TitleH2>
            </TitleContainer>
            <SwiperMultiContent>
              <BannerContainer>
                <VideoGamesCarousel
                  navigationNextClassname="swiper-btn-next-videosgames-one"
                  navigationPrevClassname="swiper-btn-prev-videosgames-one"
                  paginationClassname="swiper-pagination-videosgames-one"
                />
              </BannerContainer>
            </SwiperMultiContent>
          </SectionContent>
        </SectionVideoGames>

      </Sections>
    </MainContent >
  )
}

export default XboxSeriesX;