import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Footer } from '../components/Footer/Footer';

function Home() {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <>
      <Header />
      <main className="main">
        <Main />
      </main>
      <Footer />
    </>
  );
}

export default Home;
