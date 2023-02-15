import { useState } from "react";

interface ModalHookProps {
  closeModal: () => void;
  openModal: () => void;
  visible: boolean;
}

export function useModal(isVisible: boolean = false): ModalHookProps {
  const [visible, setVisible] = useState(isVisible);

  function closeModal() {
    setVisible(false);
  }

  function openModal() {
    setVisible(true);
  }

  return {
    closeModal,
    openModal,
    visible,
  };
}
