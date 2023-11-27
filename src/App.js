import React, { useState } from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import theme from './theme';
import Header from './components/Header';
import YamlEditor from './components/YamlEditor';
import ImportScreen from './components/ImportScreen';
import * as yaml from 'js-yaml';

function App() {
  const [yamlData, setYamlData] = useState(null);

  return (
    <ChakraProvider theme={theme}>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header />
        <Container as="main" flex="1" padding={{ base: 4, md: 8 }} maxWidth="container.xl" overflowY="auto" height="calc(100vh - 64px)">
          {yamlData ? (
            <YamlEditor yamlData={yamlData} setYamlData={setYamlData} />
          ) : (
            <ImportScreen onFileAccepted={(file) => {
              const reader = new FileReader();
              reader.readAsText(file, "UTF-8");
              reader.onload = (e) => {
                const data = yaml.load(e.target.result);
                setYamlData(data);
              };
            }} />
          )}
        </Container>
        {/* <Footer /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;