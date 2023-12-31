import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <MutatingDots
        height="100"
        width="100"
        color="black"
        secondaryColor="white"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
