import React from 'react';
import { useSelector } from 'react-redux';

const dealLength = {
  color: '#303437',
  marginRight: '1rem',
};
const total = {
  color: '#303437',
  marginLeft: '1rem',
};
const DealInfo = () => {
  const { deals } = useSelector((state) => state.deals);
  const handleSalePriceSum = () => {
    let sum = 0;
    deals.forEach((deal) => {
      sum += parseInt(deal.salePrice, 10);
    });
    return sum;
  };
  return (
    <div className="info">
      <p>
        Best Computer Games Deals,
        <p>
          {' '}
          <span style={dealLength}>{deals.length}</span>
          Lucrative Deals
        </p>
        <p>
          {' '}
          Deals Total Sale Price:
          <span style={total}>
            {' '}
            $
            {handleSalePriceSum()}
          </span>
        </p>
      </p>
    </div>
  );
};

export default DealInfo;
