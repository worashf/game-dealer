import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './dealDetail.css';

const DealDetail = () => {
  const { id } = useParams();
  console.log(id);
  const { deals } = useSelector((state) => state.deals);
  console.log(id, 'dfd');
  const deal = deals.find((deal) => deal.id === parseInt(id, 10));
  const priceDifference = deal.normalPrice - deal.salePrice;
  deals.forEach((gameDeal) => {
    const dealPerStore = deals.filter(
      (deal) => deal.storeId === gameDeal.storeId,
    );
    console.log(dealPerStore.length, `dela per store ${gameDeal.storeId}`);
  });
  deals.forEach((gameDeal) => {
    const dealPerStore = deals.filter(
      (deal) => deal.gameId === gameDeal.gameId,
    );
    console.log(dealPerStore.length, `dela per game ${gameDeal.gameId}`);
  });

  console.log(deals.length, 'deals length');

  return (
    <div className="detail-wrapper">
      <div className="highlight">
        <img src={deal.thumb} alt={deal.title} className="game-thumb" />

        <div className="deal-diff">
          <h3 className="deal-title">
            {' '}
            {deal.title}
          </h3>
          <p>
            Price Difference:
            {' '}
            <span>
              {' '}
              $
              {priceDifference.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
      <div className="detail-info">
        <div className="deatil-head">
          <h3> Game Deal detail Info</h3>
        </div>
        <div className="sale-price">
          <p> Sale Price</p>
          <p>{deal.salePrice}</p>
        </div>
        <div className="normal-price">
          <p> Normal Price</p>
          <p>{deal.normalPrice}</p>
        </div>
        <div className="savings">
          <p>Savings</p>
          <p>{deal.savings}</p>
        </div>
        <div className="deal-rating">
          <p> Deal Rating</p>
          <p>{deal.dealRating}</p>
        </div>
        <div className="stream-rating-count">
          <p> Stream Rating Count</p>
          <p>{deal.streamRatingCount}</p>
        </div>
        <div className="stream-rating-percent">
          <p> Stream Rating Percent</p>
          <p>{deal.streamRatingPercent}</p>
        </div>
      </div>
    </div>
  );
};

export default DealDetail;
