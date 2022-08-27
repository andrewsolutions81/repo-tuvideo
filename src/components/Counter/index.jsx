/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const actionIncrement = {
  type: 'INCREMENT',
};

export const actionDecrement = {
  type: 'DECREMENT',
};

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  const handleClickIncrement = () => {
    dispatch(actionIncrement);
  };

  const handleClickDecrement = () => {
    dispatch(actionDecrement);
  };

  return (
    <div>
      {count.count}
      <button onClick={handleClickIncrement}>
        +
      </button>
      <button onClick={handleClickDecrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
