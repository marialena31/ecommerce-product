import React from 'react';

import Header from './components/header/header.component';
import ProductPage from './components/product-page/product-page.componant';

import './App.scss'

function App() {
  const [quantity, setQuantity] = React.useState(0);
  const [overlay, setOverlay] = React.useState(false);

  return (
    <div className="App">
      <Header quantity={quantity} setQuantity={setQuantity} overlay={overlay} setOverlay={setOverlay}/>
      <ProductPage quantity={quantity} setQuantity={setQuantity} overlay={overlay} setOverlay={setOverlay} />
      {overlay ? <div id="overlay" class="overlay" /> : null}
    </div>
  );
}

export default App;
