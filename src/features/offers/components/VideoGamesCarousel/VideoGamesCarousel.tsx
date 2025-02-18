import { styled } from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// He decidido poner los import del swiper en el App.tsx
// para no tener que duplicar imports.
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import VideoGameCard from '../VideoGameCard/VideoGameCard';
import { useGetOffersVideoGamesQuery } from '../../redux/offersApiSlice';

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

const VideoGamesCarousel = ({
  navigationPrevClassname,
  navigationNextClassname,
  paginationClassname
}: VideoGamesCarouselProps) => {
  const { data: games, isLoading, isError } = useGetOffersVideoGamesQuery();

  // Dado que es solo una parte de la pagina de Novedades
  // he decidido que cuando haya error este cargando datos o ya haya cargado datos y no haya videojuegos en novedades
  // que se devuelva vacio para asi poder seguir representando los otros componentes.
  if (isError || isLoading || !isLoading && !games) return <></>

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
        uniqueNavElements={true}
      >
        {games?.map((data: any, index: number) =>
          <SwiperSlideStyled key={index} className='bonito44'>
            <VideoGameCard {...data} price={data.price.toLocaleString("es-ES")} />
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

export default VideoGamesCarousel;