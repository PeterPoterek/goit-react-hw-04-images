import styled from 'styled-components';

export const SearchbarHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  background-color: #171717;
  padding: 1.5rem;
  text-align: center;

  -webkit-box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);
  box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);

  z-index: 99998;
`;

export const SearchbarForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchbarSubmitButton = styled.button`
  background-color: #555;
  color: #fff;

  border: none;
  border-radius: 10px;
  padding: 1rem 1.5rem;

  cursor: pointer;
  box-shadow: 0 2px 4px rgba(52, 152, 219, 0.2);
  transition: background-color 0.3s, transform 0.1s ease-out;

  &:hover {
    background-color: #777;
    transform: scale(1.05);
  }

  &:active {
    background-color: #444;
    transform: scale(0.95);
  }
`;

export const SearchbarSubmitButtonText = styled.span`
  margin-left: 8px;
  font-size: 1rem;
`;

export const SearchbarInput = styled.input`
  padding: 1rem 1.5rem;
  margin: 0 8px;
  border: 1px solid #555;
  border-radius: 4px;

  min-width: 350px;
  font-size: 1rem;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  transition: outline 0.1s;
  &:focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    outline: 3.5px solid #777;
  }
`;
