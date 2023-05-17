import React from 'react';
import Cart from '../components/Cart/Cart';
import Header from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

function CartPage() {
  return (
    <>
      <Header />
      <main className="main">
        <Cart />
      </main>
      <Footer />
    </>
  );
}

export default CartPage;
