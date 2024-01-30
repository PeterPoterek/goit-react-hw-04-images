import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem.jsx';

import { ImageGalleryUl } from './ImageGalleryStyles';

const ImageGallery = ({ openModal, imagesToRender }) => {
  return (
    <ImageGalleryUl>
      {imagesToRender &&
        imagesToRender.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              openModal={openModal}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              tags={image.tags}
            />
          );
        })}
    </ImageGalleryUl>
  );
};

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  imagesToRender: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
