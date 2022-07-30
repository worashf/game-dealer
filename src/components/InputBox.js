import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortDeals } from '../redux/GameDeals/GameDeals';

const InputBox = () => {
  const { deals } = useSelector((state) => state.deals);
  const dealArray = [...deals];

  const dispatch = useDispatch();

  const handleSortDeals = (e) => {
    let sorted;
    if (e.target.value === 'asc') {
      sorted = dealArray.sort((a, b) => a.salePrice - b.salePrice);
      dispatch(sortDeals(sorted));
    }
    if (e.target.value === 'desc') {
      sorted = dealArray.sort((a, b) => b.salePrice - a.salePrice);
      dispatch(sortDeals(sorted));
    }
  };

  return (
    <div className="sort-wrapper">
      <span className="sort-title">Sort By Sale Price</span>
      <select className="sort" onChange={handleSortDeals}>
        <option value="asc">Asc. Sale Price</option>
        <option value="desc">Dsc. Sale Price</option>
      </select>
    </div>
  );
};

export default InputBox;
