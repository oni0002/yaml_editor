import React from 'react';
import { Button, VStack } from '@chakra-ui/react';
import YamlTable from './YamlTable';
import * as yaml from 'js-yaml';

function YamlEditor({ yamlData, setYamlData }) {
  const handleExport = () => {
    const newYaml = yaml.dump(yamlData);
    const blob = new Blob([newYaml], { type: 'text/plain' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = "exported_data.yml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <VStack spacing={4}>
      <Button colorScheme="teal" onClick={handleExport}>Export Yaml</Button>
      <YamlTable yamlData={yamlData} setYamlData={setYamlData} />
    </VStack>
  );
}

export default YamlEditor;