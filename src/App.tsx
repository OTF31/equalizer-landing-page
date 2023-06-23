import { Global, MantineProvider } from "@mantine/core";

import Home from "@pages/Home";
import bold from "./fonts/IBMPlexSans-Bold.ttf";
import regular from "./fonts/IBMPlexSans-Regular.ttf";

const GlobalStyles = () => {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "IBM Plex Sans",
            src: `url("${regular}") format("truetype")`,
            fontWeight: 400,
          },
        },
        {
          "@font-face": {
            fontFamily: "IBM Plex Sans",
            src: `url("${bold}") format("truetype")`,
            fontWeight: 700,
          },
        },
      ]}
    />
  );
};

const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: { xs: "23.4375em", sm: "48em", xl: "90em" },
        fontFamily: "IBM Plex Sans, sans-serif",
        headings: { fontWeight: 700 },
        colors: {
          pluviophile: [
            "#F0FCFC",
            "#E0F9F8",
            "#D1F6F5",
            "#C2F3F1",
            "#A3EEEA",
            "#85E8E3",
            "#66E2DC",
            "#52B5B0",
            "#3D8884",
            "#295A58",
          ],
          freshSalmon: [
            "#FFF1EE",
            "#FEE3DD",
            "#FED5CB",
            "#FDC7BA",
            "#FCAC98",
            "#FB9075",
            "#FA7453",
            "#C85D42",
            "#964632",
            "#642E21",
          ],
          warmApricot: [
            "#FFF8F0",
            "#FFF1E0",
            "#FFEAD1",
            "#FFE3C1",
            "#FFD5A2",
            "#FFC783",
            "#FFB964",
            "#CC9450",
            "#996F3C",
            "#664A28",
          ],
          coolDecember: [
            "#FFFFFE",
            "#FEFEFE",
            "#FEFEFD",
            "#FEFDFD",
            "#FDFCFB",
            "#FDFBFA",
            "#FCFAF9",
            "#CAC8C7",
            "#979695",
            "#656464",
          ],
          coarseWool: [
            "#E8E8E9",
            "#D1D1D4",
            "#BABABE",
            "#A3A3A8",
            "#75747D",
            "#474651",
            "#191826",
            "#14131E",
            "#0F0E17",
            "#0A0A0F",
          ],
        },
      }}
    >
      <GlobalStyles />
      <Home />
    </MantineProvider>
  );
};

export default App;
