import React from 'react';
import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDgxBkbLBHoutLJZcT6G0iDEoRcp_YXxK0",
  authDomain: "shoppingcart-fac8e.firebaseapp.com",
  databaseURL: "https://shoppingcart-fac8e.firebaseio.com",
  projectId: "shoppingcart-fac8e",
  storageBucket: "",
  messagingSenderId: "479899425927",
  appId: "1:479899425927:web:d2bd65e9ba6aa2911a6c22"
};


const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map(product => <li key={product.sku}>{product.title}</li>)}
    </ul>
  );
};

export default App;
