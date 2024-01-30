import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;

  background-color: #0a0a0ac5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;
export const ModalImage = styled.img`
  max-width: 1000px;
`;
export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  background: none;
  cursor: pointer;
  border: none;

  margin-top: 3rem;
  margin-right: 10rem;

  color: white;

  font-size: 3rem;
  font-weight: bold;

  z-index: 9999999;
`;
