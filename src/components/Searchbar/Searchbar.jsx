import PropTypes from 'prop-types';

import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarSubmitButton,
  SearchbarSubmitButtonText,
  SearchbarInput,
} from './SearchbarStyles';

const Searchbar = ({ handleImageSearch }) => {
  return (
    <SearchbarHeader onSubmit={handleImageSearch}>
      <SearchbarForm>
        <SearchbarSubmitButton type="submit">
          <SearchbarSubmitButtonText>Search</SearchbarSubmitButtonText>
        </SearchbarSubmitButton>

        <SearchbarInput
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </SearchbarForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  handleImageSearch: PropTypes.func.isRequired,
};

export default Searchbar;
