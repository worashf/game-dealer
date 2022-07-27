import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Deal from './Deal';
import InputBox from './InputBox';
import { getGameDeals } from '../redux/GameDeals/GameDeals';
import Spinner from './Spinner';

const DealList = () => {
  const { deals, loading } = useSelector((state) => state.deals);
  const dispatch = useDispatch();
  console.log(deals, 'deal');
  useEffect(() => {
    if (!deals.length) {
      dispatch(getGameDeals());
    }
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {' '}
          <InputBox />
          <div className="deal-container">
            {deals.map((deal) => (
              <Link to={`detail/${deal.id}`} key={deal.id}>
                <Deal
                  key={deal.id}
                  thumb={deal.thumb}
                  title={deal.title}
                  salePrice={deal.salePrice}
                  normalPrice={deal.normalPrice}
                />
                {' '}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DealList;
