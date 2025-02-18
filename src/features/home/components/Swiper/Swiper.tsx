// import { styled } from 'styled-components';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';





// import { Navigation, Pagination, Autoplay } from 'swiper/modules';


// // import { gamesService } from '../../services/gamesService';
// // import { ProductCard } from '../ProductCard/ProductCard';
// // import { SliderCardFull } from '../SliderCardFull/SliderCardFull';
// import homeData from "../../../../fakeData/homeData.json";
// import { ProductCarouselCard } from '../ProductCarouselCard/ProductCarouselCard';
// import { useSelector } from 'react-redux';
// // import homeDataCustomThree from "../../../../fakeData/gamesBannerCustomThree.json";


// const CarouselFullWidth = styled(Swiper)`
//   width: 100%;
//   padding: .5rem !important;
// `

// const CarouselSlideFullWidth = styled(SwiperSlide)`
//   display: flex !important;
//   height: 100% !important;
//   width: 18rem !important;

//   @media screen and (min-width: 640px) {
//     width: 18rem !important;
//   }
// `

// const CarouselMulti = styled.div`
//   width: 100%;
// `

// const SwiperStyledCustomTwo = styled(Swiper)`
//   width: 100%;
//   height: 100%;
//   max-height: 630px;

//   @media screen and (min-width: 801px) {
//     max-height: 520px;
//   }
// `

// const SwiperSlideStyledCustomTwo = styled(SwiperSlide)`
//   background-color: #252525;

// `

// const SwiperPaginationCustomTwo = styled.div`
//   width: 100%;
// `

// // const SwiperStyledCustomThree = styled(Swiper)`
// //   max-width: 70%;
// // `


// interface Props {
//   navigationPrevClassname: string;
//   navigationNextClassname: string;
//   paginationClassname: string;
// }

// // interface Props {
// //   colorText: string;
// // }





// // const CarouselMultiItems = ({
// //   navigationPrevClassname, navigationNextClassname,
// //   paginationClassname
// // }: Props) => {


// //   return (
// //     <>
// //       <div className={`swiper-navigation hidden xl:block mr-2`}>
// //         <div className={`swiper-button-prev ${navigationPrevClassname}`}></div>
// //       </div>
// //       <SwiperStyledCustomOne
// //         modules={[Navigation, Pagination]}
// //         spaceBetween={20}
// //         slidesPerView="auto"
// //         loop={true}
// //         autoHeight={true}
// //         navigation={{
// //           prevEl: `.${navigationPrevClassname}`,
// //           nextEl: `.${navigationNextClassname}`
// //         }}
// //         pagination={{
// //           clickable: true,
// //           el: `.${paginationClassname}`,
// //         }}

// //       >
// //         {getGames().map((product, index) =>
// //           <SwiperSlideStyledCustomOne key={index} className='bonito44'>
// //             <ProductCard {...product} />
// //           </SwiperSlideStyledCustomOne>
// //         )}
// //       </SwiperStyledCustomOne>
// //       <div className={`swiper-navigation hidden xl:block ml-2`}>
// //         <div className={`swiper-button-next ${navigationNextClassname}`}></div>
// //       </div>
// //       <SwiperPaginationCustomOne className={`swiper-pagination py-4 xl:hidden ${paginationClassname}`}></SwiperPaginationCustomOne>
// //     </>
// //   );
// // }


// // const CarouselMultiItemsFullWith = () => {
// //   return (
// //     <>
// //       <SwiperStyledCustomTwo
// //         className='swp-cust'
// //         modules={[Pagination, Autoplay]}
// //         spaceBetween={30}
// //         slidesPerView={1}
// //         autoHeight
// //         autoplay={{
// //           delay: 10000,
// //           disableOnInteraction: false
// //         }}
// //         loop={true}

// //         pagination={{
// //           clickable: true,
// //           el: `.swiper-pagination-custom`,
// //         }}
// //       >

// //         {homeData.sectionBannerFull.map((data, index) =>
// //           <SwiperSlideStyledCustomTwo key={index} className='mi-slider'>
// //             <SliderCardFull {...data} />
// //           </SwiperSlideStyledCustomTwo>
// //         )}
// //       </SwiperStyledCustomTwo>
// //       <SwiperPaginationCustomTwo className={`swiper-pagination py-4 swiper-pagination-custom`}></SwiperPaginationCustomTwo>
// //     </>
// //   );
// // }



// const Carousel = (data: T) => {
//   const top = useSelector((state: any) => state.home.product);


  
//   return (
//     <>
//       <Swiper
//         className='swp-cust'
//         modules={[Pagination, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1}
//         autoHeight
//         autoplay={{
//           delay: 10000,
//           disableOnInteraction: false
//         }}
//         loop={true}

//         pagination={{
//           clickable: true,
//           el: `.swiper-pagination-custom`,
//         }}
//       >

//         {products.map((data, index) =>
//           <SwiperSlide key={index}>
//             <ProductCarouselCard {...product} />
//           </SwiperSlide>
//         )}
//       </Swiper>
//       <div className={`swiper-pagination py-4 swiper-pagination-custom`}></div>
//     </>
//   )
// }


// export default Carousel;