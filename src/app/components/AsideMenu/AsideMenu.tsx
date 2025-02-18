import { NavLink } from "react-router";
import styled from "styled-components";


const AsideStyled = styled.aside`
  user-select: none;
  margin-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 100%;
  width: 100vw;
  z-index: 2789;
  box-sizing: content-box;
  visibility: hidden;
  transition: margin .25s ease-out 0s, transform .25s ease-out 0s, width .25s ease-out 0s, bottom .25s ease-out 0s, 
    padding .25s linear 0s, visibility .25s linear 0s;

  &:selection {
    color: initial;
  }

  @media screen and (min-width: 801px) {
    display: none;
  }
`

const MenuWrapper = styled.div`
  width: 100%;
`

const MenuContent = styled.div`
  padding-top: 14vw;
  box-sizing: border-box;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  inset: 0;
  z-index: 9999;
  background-color: #303030;
`

const Menu = styled.div`
  width: 100%;
  position: absolute;
  transition: left .2s linear;
  left: 0;
`

const MenuItem = styled.div`
  position: relative;
  overflow: hidden;
  background-color:#303030;
`

const MenuLink = styled(NavLink)`
  color: white;
  padding: 0 27.77px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: clamp(40px, 13vw, 70px);
  text-decoration: none;

  &:link {
    color: white;
  }

  &:hover {
    color: white;
    background-color: orange;
  }

  &:selection {
    background-color: green;
  }

`

const CloseImage = styled.img`
  top: 6vw;
  right: 7vw;
  z-index: 2;
  position: absolute;
  width: 20px;
  height: 20px;
`

interface Props {
  bMenuOpen: boolean;
  handleCloseMenu: () => void;
}

const AsideMenu = ({ bMenuOpen, handleCloseMenu }: Props) => {

  return (
    <AsideStyled style={bMenuOpen ? { visibility: "visible", transform: "translate(100%)" } : {}}>
      <MenuWrapper>
        <MenuContent>
          <CloseImage src="/menu_white.svg" onClick={handleCloseMenu} />
          <Menu>
            <MenuItem>
              <MenuLink to={"/tops"} onClick={handleCloseMenu}><span>Tops</span></MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to={"/novedades"} onClick={handleCloseMenu}><span>Novedades</span></MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to={"/ofertas"} onClick={handleCloseMenu}><span>Ofertas</span></MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to={"/playstation-5"} onClick={handleCloseMenu}><span>PS5</span></MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to={"/playstation-4"} onClick={handleCloseMenu}><span>PS4</span></MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to={"/xbox-series-x"} onClick={handleCloseMenu}><span>XBOX</span></MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to={"/nintendo-switch"} onClick={handleCloseMenu}><span>switch</span></MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to={"/pc"} onClick={handleCloseMenu}><span>Pc</span></MenuLink>
            </MenuItem>
          </Menu>
        </MenuContent>
      </MenuWrapper>
    </AsideStyled>
  )

}

export default AsideMenu;