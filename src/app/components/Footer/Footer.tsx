import { Link } from "react-router";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #303030;
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
  display: block;
`

const FooterSection = styled.div`
  width: 100%;
  // margin-top: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 4rem;

  @media screen and (min-width: 1441px) {
    min-height: 80px;
  }
`

const LinkContainer = styled.div`
  margin-right: 1rem;
`

const LinkStyled = styled(Link)`
  color: white;

  &:hover {
    color: #fe9f1f;
  }
`;

export const Footer = () => {
  return <FooterContainer>
    <FooterSection>
      <LinkContainer>
        <LinkStyled to="/politica-de-privacidad">Politica de privacidad</LinkStyled>
      </LinkContainer>
      <LinkContainer>
        <LinkStyled to="/politica-de-privacidad">Aviso legal</LinkStyled>
      </LinkContainer>
    </FooterSection>
  </FooterContainer>
}

export default Footer;