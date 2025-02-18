import { styled } from "styled-components"
import { useGetHomeGaleryQuery } from "../../redux/homeApiSlice"
import { Link } from "react-router"


const GaleryStyled = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
`

const GaleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8%;

  @media screen and (min-width: 801px) {
    flex-direction: row;
  }
`

const GaleryItem = styled.div`
  margin-bottom: 1rem;
  flex: 0 0 100%;

  @media screen and (min-width: 801px) {
    flex: 1 1 40%;
    margin-bottom: 0;
  }
`

const LinkStyled = styled(Link)`

`

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const Galery = () => {
  const { data: images, isLoading, isError } = useGetHomeGaleryQuery();

  // Dado que es solo una parte de la pagina de Novedades
  // he decidido que cuando haya error este cargando datos o ya haya cargado datos y no haya videojuegos en novedades
  // que se devuelva vacio para asi poder seguir representando los otros componentes.
  if (isError || isLoading || !isLoading && !images) return <></>

  return (
    <GaleryStyled>
      <GaleryContainer>
        {images.map((image, index) =>
          <GaleryItem key={index}>
            <LinkStyled to={image.href}>
              <Image src={image.imageUrl} />
            </LinkStyled>
          </GaleryItem>
        )}
      </GaleryContainer>
    </GaleryStyled>
  )
}

export default Galery;