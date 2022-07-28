import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Deal from './Deal';
import InputBox from './InputBox';
import { getGameDeals } from '../redux/GameDeals/GameDeals';
import Spinner from './Spinner';

const DealList = () => {
  const [title, setTitle] = useState('');
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
          <div className="input-box">
            <input
              value={title}
              className="input"
              type="text"
              name="city-name"
              placeholder="Enter Game Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputBox />
          </div>
          <div className="deal-container">
            {deals.length !== 0 ? (
              deals
                .filter((del) => del.title.match(title))
                .map((deal) => (
                  <Link
                    to={`detail/${deal.id}`}
                    key={deal.id}
                    className="deals"
                  >
                    <Deal
                      key={deal.id}
                      thumb={deal.thumb}
                      title={deal.title}
                      salePrice={deal.salePrice}
                      normalPrice={deal.normalPrice}
                    />
                    {' '}
                  </Link>
                ))
            ) : (
              <div style={{ color: 'red' }}> no Data</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DealList;
