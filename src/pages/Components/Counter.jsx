import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.store.count);

  return <div>Count: {count}</div>;
};

export default Counter;
