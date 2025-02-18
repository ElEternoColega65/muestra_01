import { useLocation, useParams } from "react-router"
import { styled } from "styled-components"

import useProductNotFoundNavigate from "../hooks/useProductNotFoundNavigate"
import useProductPathNameFixedNavigate from "../hooks/useProductPathNameFixedNavigate"
import usePageUpdateTitle from "../hooks/usePageUpdateTitle"
import useProductRouteLocationHashChecked from "../hooks/useProductRouteLocationHashChecked";
import useWindowSize from "../hooks/useWindowSize"
import { useGetProductByIdQuery } from "../redux/productDetailsApiSlice";
import Skeleton from "../components/Skeleton/Skeleton";
import ProductBasicCard from "../components/ProductBasicCard/ProductBasicCard"
import ProductDetailsCard from "../components/ProductDetailsCard/ProductDetailsCard"
import { ProductContext } from "../useContext/productContext"
import useProductCarousel from "../hooks/useProductCarousel"
import ProductCarousel from "../components/ProductCarousel/ProductCarousel"
import useMobileModal from "../hooks/useMobileModal"
import ProductBasicCardMobile from "../components/ProductBasicCard/ProductBasicCardMobile"
import ProductDetailsCardMobile from "../components/ProductDetailsCard/ProductDetailsCardMobile"
import ProductCharacteristicsMobile from "../components/ProductCharacteristics/ProductCharacteristicsMobile"

// Router Wrapper
const MainContent = styled.main<{ $minHeight?: string }>`
  // min-height: 100vh;
  min-height: ${props => props.$minHeight ? props.$minHeight : "100vh"};
  display: block;
  max-width: 1920px;
  margin: 0 auto;
`

// All to devices (width >= 801px)
const SectionProduct = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
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

  @media screen and (min-width: 801px) {
    padding: 8rem 0 4.2em 0;
  }

  @media screen and (min-width: 1081px) {
    padding: 9rem 0 4.2em 0;
  }

  @media screen and (min-width: 1201px) {
    padding: 10rem 0 4.2em 0;
  }

  @media screen and (min-width: 1441px) {
    padding: 10rem 0 2em 0;
  }
`

const SectionRow = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  width: 100%;
  height: 100%;
`


// All to devices only (width < 801px)

const SectionProductMobile = styled.section<{ $minHeight?: string }>`
  width: 100%;
  display: flex;
  min-height: ${props => props.$minHeight ? props.$minHeight : "100vh"};
`

const ProductWrapperMobile = styled.div`

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    display: block;
    width: 100%;
    float: left;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    display: block;
    width: 100%;
    float: left;
  }
`

const ProductContentMobile = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
`

const ProductDetails = () => {
  const params = useParams();
  const location = useLocation();
  // const [hashLastValue, setHashLastValue] = useState(location.hash);

  const { data: product, isError, isLoading } = useGetProductByIdQuery({ productId: params.id as string });

  const needNavigate = !isLoading && !product || isError;
  const needFixedPath = (!isLoading && product && product?.path !== location.pathname) as boolean;
  const pageTitle = "Comprar " + product?.title + " " + product?.techInfos.platform + " " + product?.platformEdition + " | page";
  const needUpdateTitle = (!isLoading && product && document.title !== pageTitle) as boolean;

  useProductNotFoundNavigate(needNavigate, !product && !isError);
  useProductPathNameFixedNavigate(needFixedPath, product?.path as string);
  usePageUpdateTitle(needUpdateTitle, pageTitle);

  const hashValid = useProductRouteLocationHashChecked(["#skuContent", "#skuDescription", "#skuTechInfos", "#skuScreens"]);
  const { windowSize } = useWindowSize();

  const { isCarouselOpen, handleCarousel, imageIndex, handleCurrentImage } = useProductCarousel();
  const { isOpen: isMobileModalOpen, handleMobileModal } = useMobileModal();

  if (isError) {
    return <div>Redirigiendo</div>;
  }

  if (isLoading) return <Skeleton />

  if (product) {
    return (
      <>
        <ProductContext.Provider
          value={{
            product,
            handleCarousel,
            imageIndex,
            handleCurrentImage
          }}>
          <div style={{ display: isCarouselOpen ? "block" : "none" }}>
            <ProductCarousel />
          </div>
          {windowSize.width >= 801
            ? (
              <MainContent>
                <SectionProduct>
                  <SectionStyled>
                    <SectionRow>
                      <ProductBasicCard />
                      <ProductDetailsCard />
                    </SectionRow>
                  </SectionStyled>
                </SectionProduct>
              </MainContent>

            )
            : (
              <MainContent $minHeight={!isMobileModalOpen || !hashValid ? "100vh" : "100%"}>
                <SectionProductMobile $minHeight={!isMobileModalOpen || !hashValid ? "100vh" : "100%"} className="product">
                  <ProductWrapperMobile className="mobile">
                    <ProductContentMobile style={{ overflowX: isMobileModalOpen ? "visible" : "hidden" }} className="mobile-side">

                      <ProductBasicCardMobile isShow={!isMobileModalOpen || !hashValid} />
                      <ProductDetailsCardMobile isShow={!isMobileModalOpen || !hashValid} handleMobileModal={handleMobileModal} />
                      <ProductCharacteristicsMobile handleBack={handleMobileModal} isShow={isMobileModalOpen && hashValid} sku={location.hash} />

                    </ProductContentMobile>
                  </ProductWrapperMobile>
                </SectionProductMobile>
              </MainContent>
            )
          }
        </ProductContext.Provider >
      </>
    )
  }

  return null;
}



export default ProductDetails;

