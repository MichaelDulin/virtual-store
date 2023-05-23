import React from 'react';
// import { Provider } from 'react-redux'; // this is our new Provider from the library that connects "stores" to react applications.
import createStore from './store/index';
import Header from './Components/Header/index';
import Categories from './Components/Categories/index';
import Products from './Components/Products/index';
import Footer from './Components/Footer/index';

const App = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default App;