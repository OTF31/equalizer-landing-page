import { MantineProvider } from "@mantine/core";

import Home from "@pages/Home";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Home />
    </MantineProvider>
  );
};

export default App;
