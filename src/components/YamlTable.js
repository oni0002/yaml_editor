import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, IconButton, useDisclosure, Box, Heading } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import EditModal from './EditModal';

function YamlTable({ yamlData, setYamlData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [editItem, setEditItem] = React.useState(null);

  const handleEdit = (category, itemIndex) => {
    setEditItem({ category, itemIndex, item: yamlData[category][itemIndex] });
    onOpen();
  };

  const handleSave = (editedItem) => {
    const newData = { ...yamlData };
    const { category, itemIndex } = editItem;
    newData[category][itemIndex] = editedItem;
    setYamlData(newData);
  };

  return (
    <>
      <Box width="full">
        {Object.keys(yamlData).map(category => (
          <Box key={category} mb={4}>
            <Heading as="h2" mb={2} size="xl">{category}</Heading>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  {yamlData[category][0] && Object.keys(yamlData[category][0]).map(header => (
                    <Th key={header}>{header}</Th>
                  ))}
                  <Th>Edit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {yamlData[category].map((item, index) => (
                  <Tr key={index}>
                    {Object.entries(item).map(([key, value]) => (
                      <Td key={key}>{value}</Td>
                    ))}
                    <Td>
                      <IconButton
                        aria-label="Edit item"
                        icon={<EditIcon />}
                        size="sm"
                        onClick={() => handleEdit(category, index)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        ))}
      </Box>
      <EditModal
        isOpen={isOpen}
        onClose={onClose}
        item={editItem ? editItem.item : {}}
        onSave={handleSave}
      />
    </>
  );
}

export default YamlTable;