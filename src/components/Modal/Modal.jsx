import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalImage, ModalCloseButton } from './ModalStyles';

const Modal = ({ closeModal, largeImageURL }) => {
  const handleKeyPress = useCallback(
    event => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <ModalContainer>
      <ModalImage src={largeImageURL}></ModalImage>
      <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
    </ModalContainer>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
