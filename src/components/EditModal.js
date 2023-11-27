import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

function EditModal({ isOpen, onClose, item, onSave }) {
  const [editedItem, setEditedItem] = React.useState(item);

  // 編集された値でeditedItemを更新する
  const handleChange = (key, value) => {
    setEditedItem({ ...editedItem, [key]: value });
  };

  // 保存ボタンが押されたときにonSaveをトリガーする
  const handleSave = () => {
    onSave(editedItem);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>アイテムを編集</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {Object.entries(item).map(([key, value]) => (
            <FormControl key={key} id={key} isRequired>
              <FormLabel>{key}:</FormLabel>
              <Input
                value={editedItem[key]}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </FormControl>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            保存
          </Button>
          <Button variant="ghost" onClick={onClose}>キャンセル</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditModal;
