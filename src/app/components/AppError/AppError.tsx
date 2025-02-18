import { useEffect } from "react";
import { FallbackProps } from "react-error-boundary";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

const PageContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
  color: ${props => props.theme.textPrimaryColor};
`

const PaginaMia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size 90px;
`

export const AppError = (props: FallbackProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/error", { replace: true });
  }, [navigate])

  return (
    <PageContainer>
      <PaginaMia>
      </PaginaMia>
    </PageContainer>
  )
}