import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { useAppSelector } from './redux/hook';

function App() {
  const theme = useAppSelector((store) => store.theme.value)
  return (
    <div className={theme ? 'app-wrapper' : 'app-wrapper-dark'}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
