import styled from "styled-components";

import { NavLink } from "react-router";
import AsideMenu from "../AsideMenu/AsideMenu";
import { useState } from "react";

const HeaderStyled = styled.header`
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
  display: block;
  transition: all .2s;
`

// box-shadow: ${props => props.theme.headerBoxShadow};
const HeaderFixed = styled.div`
  position: relative;
  transition: all .2s;
  z-index: 0;

  @media screen and (min-width: 801px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2999;
  }
`

const HeaderWrapper = styled.div`
  position: relative;
  background-color: #303030;
  min-height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


// height: clamp(70px, 20vw, 124px);
const Navbar = styled.nav`
  margin: 0 auto;
  padding: 0;
  position: relative;
  width: 100%;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
  height: clamp(48.6px, 18.2vw, 101.2px);
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    color: white;
  }

  @media screen and (min-width: 801px) {
    max-width: 1440px;
    height: clamp(55.56px, 5.56vw, 80px);
    padding: 0 15px;
  }
`

const NavbarColumn = styled.div`
  margin: 0 auto;
  padding: 0;
  position: relative;
  width: 100%;
  background-color:rgb(211, 211, 211);
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
  height: clamp(48.6px, 18.2vw, 91.2px);
  display: none;
  justify-content: center;
  align-items: center;

  & > * {
    color: black;
  }

  @media screen and (min-width: 801px) {
    display: flex;
    height: clamp(35.56px, 3.56vw, 40px);
    padding: 0 15px;
  }
`

const NavbarInner = styled.div`
  padding: 0 5vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0;

  @media (min-width: 801px) {
    padding: 0;
  }
`

const NavbarLeft = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: start;
  height: 100%
`

const NavbarRight = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: end;
  height: 100%
`

const MenuButton = styled.div`
  background-color: transparent;
  background-image: none;
  padding-right: 4.5vw;
  border-radius: 5px;
  border: 0 solid rgb(193, 206, 218);
  -webkit-appearance: button;

  &.first {
    padding-left: 0 !important;
  }

  &.last {
    padding-right: 0 !important;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    padding: 8px 8px 8px 0;

  }

  @media screen and (min-width: 801px) {
    padding: 0 1.18vw;
  }
`

const MenuButtonLink = styled(NavLink)`
  background-color: transparent;
  background-image: none;
  padding-right: 4.5vw;
  border-radius: 5px;
  border: 0 solid rgb(193, 206, 218);
  -webkit-appearance: button;

  &.first {
    padding-left: 0 !important;
  }

  &.last {
    padding-right: 0 !important;
  }

  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    padding: 8px 8px 8px 0;

  }

  @media screen and (min-width: 801px) {
    padding: 0 1.18vw;
  }
`

const MenuNavLinkLogo = styled(NavLink)`
  padding: 0 2.77vw;
  height: clamp(30px, 9vw, 53px);
  display: flex;
  justify-content: center;
  align-items: center;

  
  @media screen and (min-width: 801px) {
    padding: 0 1.18vw;
    height: clamp(24.31px, 2.43vw, 35px);
  }
`

const MenuNavLink = styled(NavLink)`
  padding: 0 1.18vw;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 160px;
  line-height: 1.2;
  
  @media screen and (min-width: 801px) {
    display: flex;
  }

  @media screen and (min-width: 1025px) {
    //  padding: 0 2vw;
  }

  @media screen and (min-width: 1441px) {
    // padding: 0 30px;
  }

  &:hover {
    background-color: #fe9f1f;
    color: black;
  }

  .active > div {
    display: block;
  }
`

const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  vertical-align: baseline;
  text-align: center;

  .white {
    display: block;
  }

  .orange {
    display: none;
  }

  &:hover {
    .white {
      display: none;
    }
    .orange {
      display: block;
    }

    color: #fe9f1f;
  }
`

const MenuIcon = styled.div`
  height: clamp(18px, 6vw, 32px);

  @media screen and (min-width: 801px) {
    height: clamp(24.31px, 2.43vw, 35px);
    height: clamp(16.67px, 1.67vw, 24px)
  }
`

const MenuLogo = styled.img`
  height: clamp(30px, 9vw, 53px);

  @media screen and (min-width: 801px) {
    height: 100%;
  }
`

const MenuMobileImage = styled.img`
  height: clamp(18px, 6vw, 32px);
  overflow: clip;

  @media screen and (min-width: 801px) {
    height: 100%;
    height: clamp(16.67px, 1.67vw, 24px);
  }
`

const MenuLabel = styled.span`
  font-weight: 400;
  font-size: 10px;
  margin-top: .33em;
  line-height: 1;
  vertical-align: baseline;

  @media screen and (min-width: 320px) and (max-aspect-ratio: 13 / 9) {
    font-size: 3.125vw;
  }
  
  @media screen and (min-width: 561px) and (max-aspect-ratio: 13 / 9) {
    font-size: 18px;
  }
 
  @media screen and (min-width: 320px) and (min-aspect-ratio: 13 / 9) {
    font-size: 11px;
  }

  @media screen and (min-width: 801px) {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: .5em;
  }

  @media screen and (min-width: 1001px) {
    font-size: .83vw;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }

`

const MenuLinkText = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-top: .33em;
  line-height: 1.2;
  vertical-align: baseline;

  @media screen and (min-width: 801px) {
    font-size: 1.181vw;
    text-transform: uppercase;
    font-weight: 900;
    margin-top: .5em;
  }

  @media screen and (min-width: 1441px) {
    font-size: 17px;
  }


`

const SubMenuLinkText = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-top: .33em;
  line-height: 1.2;
  vertical-align: baseline;

  @media screen and (min-width: 801px) {
    font-size: 1vw;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: .5em;
  }

  @media screen and (min-width: 1441px) {
    font-size: 16px;
  }
`

const NavbarRouteActive = styled.div`
  margin-top: 4px;
  width: 50%;
  height: 2px;
  background-color: orange;
  visibility: hidden;

  .active > & {
    visibility: visible;
  }

  .active:hover > & {
    background-color: black;
  } 
`

const SubNavbarRouteActive = styled(NavbarRouteActive)`
  background-color: black;

  .active:hover > & {
    background-color: black;
  } 
`


export const Header = () => {
  const [bMenuOpen, SetMenuOpen] = useState(false);

  const handleMenu = () => {
    SetMenuOpen(!bMenuOpen);
  }

  return (
    <>
      <HeaderStyled>
        <HeaderFixed>

          <HeaderWrapper>
            <Navbar>
              <NavbarInner>
                <NavbarLeft>
                  <MenuButton className="first tablet:hidden">
                    <MenuIconWrapper onClick={handleMenu}>
                      <MenuIcon>
                        <MenuMobileImage className="white" src="/menu_white.svg" />
                        <MenuMobileImage className="orange" src="/menu_orange.svg" />

                      </MenuIcon>
                      <MenuLabel>Menú</MenuLabel>
                    </MenuIconWrapper>
                  </MenuButton>

                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <MenuNavLinkLogo to="/">
                      <MenuLogo alt="page" src="/page_icon.svg" />
                    </MenuNavLinkLogo>
                  </div>

                  <MenuNavLink
                    to="/tops"
                  >
                    <MenuLinkText>Tops</MenuLinkText>
                    <NavbarRouteActive />
                  </MenuNavLink>

                  <MenuNavLink to="/novedades">
                    <MenuLinkText>Novedades</MenuLinkText>
                    <NavbarRouteActive />
                  </MenuNavLink>

                  <MenuNavLink to="/ofertas">
                    <MenuLinkText>Ofertas</MenuLinkText>
                    <NavbarRouteActive />
                  </MenuNavLink>
                </NavbarLeft>

                <NavbarRight>
                  <MenuButtonLink to={"/login"}>
                    <MenuIconWrapper>
                      <MenuIcon>
                        <MenuMobileImage className="white" src="/acceder_white.svg" />
                        <MenuMobileImage className="orange" src="/acceder_orange.svg" />

                      </MenuIcon>
                      <MenuLabel>Acceder</MenuLabel>
                    </MenuIconWrapper>
                  </MenuButtonLink>

                  <MenuButtonLink to="/registro" className="last">
                    <MenuIconWrapper>
                      <MenuIcon>
                        <MenuMobileImage className="white" src="/cesta_white.svg" />
                        <MenuMobileImage className="orange" src="/cesta_orange.svg" />

                      </MenuIcon>
                      <MenuLabel>Cesta</MenuLabel>
                    </MenuIconWrapper>
                  </MenuButtonLink>

                </NavbarRight>
              </NavbarInner>
            </Navbar>

            <NavbarColumn>
              <NavbarInner style={{ maxWidth: "1380px" }}>
                <NavbarLeft>
                  <MenuNavLink to="/playstation-5">
                    <SubMenuLinkText>PS5</SubMenuLinkText>
                    <SubNavbarRouteActive />
                  </MenuNavLink>

                  <MenuNavLink to="/playstation-4">
                    <SubMenuLinkText>PS4</SubMenuLinkText>
                    <SubNavbarRouteActive />
                  </MenuNavLink>

                  <MenuNavLink to="/xbox-series-x">
                    <SubMenuLinkText>XBOX</SubMenuLinkText>
                    <SubNavbarRouteActive />
                  </MenuNavLink>

                  <MenuNavLink to="/nintendo-switch">
                    <SubMenuLinkText>Switch</SubMenuLinkText>
                    <SubNavbarRouteActive />
                  </MenuNavLink>

                  <MenuNavLink to="/pc">
                    <SubMenuLinkText>PC</SubMenuLinkText>
                    <SubNavbarRouteActive />
                  </MenuNavLink>

                </NavbarLeft>
              </NavbarInner>
            </NavbarColumn>
          </HeaderWrapper>
        </HeaderFixed>
      </HeaderStyled>
      <AsideMenu bMenuOpen={bMenuOpen} handleCloseMenu={handleMenu} />
    </>
  )
}

export default Header;