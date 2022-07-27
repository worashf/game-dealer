import React from 'react';
import PropTypes from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const Deal = (props) => {
  const {
    title, thumb, salePrice, normalPrice,
  } = props;
  return (
    <div className="deal-wrapper">
      <div className="thum">
        <img src={thumb} alt="thumb" className="thumb-img" />
      </div>
      <div className="deal-info">
        <p className="game-title">
          {title}
          {' '}
        </p>
        <FaRegArrowAltCircleRight />
      </div>
      <div className="price-info">
        <p>
          {' '}
          Sale Price :
          <span>
            {' '}
            {`$${salePrice}`}
          </span>
        </p>
        <p>
          {' '}
          Normal Price :
          <span>
            {' '}
            {`$${normalPrice}`}
          </span>
        </p>
      </div>
    </div>
  );
};

Deal.propTypes = {
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  salePrice: PropTypes.number.isRequired,
  normalPrice: PropTypes.number.isRequired,
};
export default Deal;
