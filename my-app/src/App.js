import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import Store from './redux/Store'; // Ensure this is the correct path to your Redux store
import Cart from './components/Cart'; // Ensure this is the correct path to your Cart component
import data from './components/data.json'; // Importing data

import { addItem } from './components/cartSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch each product to the Redux store
    data.products.forEach((item) => dispatch(addItem(item)));
  }, [dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product List</h1>
      <Cart />
    </div>
  );
};

// Wrap the entire App in the Provider component
const RootApp = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

export default RootApp;
