import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalImage, ModalCloseButton } from './ModalStyles';

class Modal extends Component {
  handleKeyPress = event => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { closeModal, largeImageURL } = this.props;

    return (
      <ModalContainer>
        <ModalImage src={largeImageURL}></ModalImage>
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
      </ModalContainer>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
