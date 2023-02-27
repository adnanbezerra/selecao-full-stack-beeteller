import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../assets/styles/GlobalStyle';
import UserContext from './contexts/UserContext';

function App() {
  return (
    <UserContext.Provider>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<></>} />
        </Routes>
      </BrowserRouter >
    </UserContext.Provider>
  )
}

export default App;
