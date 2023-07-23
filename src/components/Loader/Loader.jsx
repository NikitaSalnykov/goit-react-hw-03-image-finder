import { Oval } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        height={80}
        width={80}
        color="#5b4da9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1e1ca8"
        strokeWidth={4}
        strokeWidthSecondary={3}
      />
    </LoaderContainer>
  );
};
