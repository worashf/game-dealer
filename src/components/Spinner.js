import React from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

const spinnerColor = {
  color: '#fff',
};
const spinner = {
  padding: '2% 40%',
};

const Spinner = () => {
  const { loading } = useSelector((state) => state.deals);
  return (
    <div style={spinner}>
      <ClipLoader color={spinnerColor} loading={loading} size={150} />
    </div>
  );
};

export default Spinner;
