import styled from 'styled-components';

export const ImageGalleryLi = styled.li`
  border-radius: 2px;

  border: solid 5px #262626;

  cursor: pointer;

  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;
export const ImageGalleryImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
