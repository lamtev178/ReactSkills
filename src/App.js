import './App.css';
import React from 'react';
import DataList from './components/DataListComponent'
import Time from './components/TimeComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import SortData from './components/SortDataComponent'
import {themeContext} from './components/context'
const {useState} = React

function App() {  
  const [theme, setTheme] = useState('blue')
  return (
  <themeContext.Provider value={{theme, setTheme}}>
      <Header />
      <DataList />
      <Time />
      <SortData />
      <Footer />
    </themeContext.Provider>
  );
}

export default App;
