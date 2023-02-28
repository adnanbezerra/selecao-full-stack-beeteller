import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import UserContext from './components/contexts/UserContext';
import FeedPage from './components/pages/FeedPage/FeedPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import TopBar from './components/templates/TopBar/TopBar';

export default function App() {
  const [token, setToken] = useState();

  return (
    <UserContext.Provider value={{token, setToken}}>
      <GlobalStyle />

      <TopBar />

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/feed'} element={<FeedPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}
