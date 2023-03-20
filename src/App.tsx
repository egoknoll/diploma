import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAppSelector } from './redux/hook';
import AuthRoot from './components/routes/AuthRoot';
import ContentPage from './pages/ContentPage/ContentPage';
import SearchPage from './pages/SeacrhPage/SearchPage';

function App() {
  const theme = useAppSelector((store) => store.theme.value)
  return (
    <div className={theme ? 'app-wrapper' : 'app-wrapper-dark'}>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate replace to="/news" />} />
            <Route path='/news'>
                <Route index element={<HomePage />}></Route>
                <Route element={
                  <AuthRoot route='/news' dependency={true}>
                    <ContentPage />
                  </AuthRoot>
                } path=':id' />
            </Route>
            <Route path='/search' element={<SearchPage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
