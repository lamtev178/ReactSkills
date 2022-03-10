import './App.css';
import React from 'react';
import DataList from './components/DataListComponent'
import Time from './components/TimeComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'

function App() {

  return (
    <>
      <Header />
      <DataList />
      <Time />
      <Footer />
    </>
  );
}

export default App;
