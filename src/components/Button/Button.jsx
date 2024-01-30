import PropTypes from 'prop-types';

import { LoadMoreButton } from './ButtonStyles';

const Button = ({ renderMoreImages }) => {
  return (
    <LoadMoreButton onClick={renderMoreImages} type="button">
      Load More
    </LoadMoreButton>
  );
};

Button.propTypes = {
  renderMoreImages: PropTypes.func.isRequired,
};

export default Button;
