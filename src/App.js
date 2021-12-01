import React from 'react';

import Header from './components/header/header.component';
import ProductPage from './components/product-page/product-page.componant';

import './App.scss'


function App() {
  return (
    <div className="App">
      <Header />
      <ProductPage/>
      {/* <div class="overlay" style="visibility: hidden;"></div> */}
    </div>
  );
}

export default App;
