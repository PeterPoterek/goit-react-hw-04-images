import PropTypes from 'prop-types';

import { ImageGalleryLi, ImageGalleryImage } from './ImageGalleryItemStyles';

const ImageGalleryItem = ({ openModal, webformatURL, largeImageURL, tags }) => {
  return (
    <ImageGalleryLi onClick={() => openModal(largeImageURL)}>
      <ImageGalleryImage src={webformatURL} alt={tags} />
    </ImageGalleryLi>
  );
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
