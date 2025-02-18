import { styled } from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import ProductCard from '../ProductCard/ProductCard';
import { useGetTopsVideoGamesQuery } from '../../../tops/redux/topsApiSlice';

const SwiperStyled = styled(Swiper)`
  width: 100%;
  padding: .5rem !important;
`

const SwiperSlideStyled = styled(SwiperSlide)`
  display: flex !important;
  height: 100% !important;
  width: 18rem !important;

  @media screen and (min-width: 640px) {
    width: 18rem !important;
  }
`

const SwiperPagination = styled.div`
  width: 100%;
`

interface VideoGamesCarouselProps {
  navigationPrevClassname: string;
  navigationNextClassname: string;
  paginationClassname: string;
}

const VideoGameTopsCarousel = ({
  navigationPrevClassname,
  navigationNextClassname,
  paginationClassname,
}: VideoGamesCarouselProps) => {

  const { data: videoGamesTops, isLoading, isError } = useGetTopsVideoGamesQuery();

  // Dado que es solo una parte de la pagina de Novedades
  // he decidido que cuando haya error este cargando datos o ya haya cargado datos y no haya videojuegos en novedades
  // que se devuelva vacio para asi poder seguir representando los otros componentes.
  if (isError || isLoading || !isLoading && !videoGamesTops) return <></>

  return (
    <>
      <div className={`swiper-navigation hidden xl:block mr-2`}>
        <div className={`swiper-button-prev ${navigationPrevClassname}`}></div>
      </div>

      <SwiperStyled
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        autoHeight={true}
        navigation={{
          prevEl: `.${navigationPrevClassname}`,
          nextEl: `.${navigationNextClassname}`
        }}
        pagination={{
          el: `.${paginationClassname}`,
          clickable: true,
        }}
      >
        {videoGamesTops.map((data, index: number) =>
          <SwiperSlideStyled key={index}>
            <ProductCard {...data} price={data.price.toLocaleString("es-ES")} />
          </SwiperSlideStyled>
        )}
      </SwiperStyled>

      <div className={`swiper-navigation hidden xl:block ml-2`}>
        <div className={`swiper-button-next ${navigationNextClassname}`}></div>
      </div>

      <SwiperPagination className={`swiper-pagination py-4 xl:hidden ${paginationClassname}`}></SwiperPagination>
    </>
  )
}

export default VideoGameTopsCarousel;