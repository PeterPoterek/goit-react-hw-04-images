import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  margin: auto;
  margin-top: 20px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

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
