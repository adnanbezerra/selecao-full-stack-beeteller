import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import UserContext from './components/contexts/UserContext';
import FeedPage from './components/pages/FeedPage/FeedPage';
import TopBar from './components/templates/TopBar/TopBar';

export default function App() {
  return (
    <UserContext.Provider>
      <GlobalStyle />

      <TopBar />

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<FeedPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}
