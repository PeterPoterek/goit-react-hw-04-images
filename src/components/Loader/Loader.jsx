import { ThreeDots } from 'react-loader-spinner';

import { LoaderWrapper } from './LoaderStyles';

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="120"
        width="120"
        color="#52525b"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </LoaderWrapper>
  );
};

export default Loader;
