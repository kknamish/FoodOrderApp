import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import Footer from './Components/UI/Footer';
import Orders from './Orders/Orders';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [ordersIsShown, setOrdersIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  const showOrdersHandler = () => {
    setOrdersIsShown(true);
  }

  const hideOrdersHandler = () => {
    setOrdersIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      {ordersIsShown && <Orders onHideOrders={hideOrdersHandler} />}
      <Header onShowCart={showCartHandler} onShowOrders={showOrdersHandler} />
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
