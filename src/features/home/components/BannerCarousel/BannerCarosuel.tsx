
import { styled } from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useGetHomeMainBannerQuery } from '../../redux/homeApiSlice';
import BannerCard from '../BannerCard/BannerCard';

const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  max-height: 630px;

  @media screen and (min-width: 801px) {
    max-height: 520px;
  }
`

const SwiperSlideStyled = styled(SwiperSlide)`
  background-color: #252525;

`

const SwiperPagination = styled.div`
  width: 100%;
`

const BannerCarousel = () => {
  const { data: bannerData, isLoading, isError } = useGetHomeMainBannerQuery();

  // Dado que es solo una parte de la pagina de Novedades
  // he decidido que cuando haya error este cargando datos o ya haya cargado datos y no haya videojuegos en novedades
  // que se devuelva vacio para asi poder seguir representando los otros componentes.
  if (isError || isLoading || !isLoading && !bannerData) return <></>

  return (
    <>
      <SwiperStyled
        className='swp-cust'
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoHeight
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        loop={true}

        pagination={{
          clickable: true,
          el: `.swiper-pagination-custom`,
        }}
      >

        {bannerData?.map((data, index) =>
          <SwiperSlideStyled key={index} className='mi-slider'>
            <BannerCard {...data} />
          </SwiperSlideStyled>
        )}
      </SwiperStyled>
      <SwiperPagination className={`swiper-pagination py-4 swiper-pagination-custom`}></SwiperPagination>
    </>

  );

}


export default BannerCarousel;