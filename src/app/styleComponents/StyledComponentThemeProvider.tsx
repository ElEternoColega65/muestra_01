import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

interface Props {
  children: React.ReactElement;
}

export const StyledComponentThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}