// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage';
import SelectPlayerPage from './pages/SelectPlayerPage';
import BoxScorePage from './pages/BoxScorePage';
import GameResultPage from './pages/GameResultPage';

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/Basketball_Record_Application/" element={<Home />} />
        <Route
          path="/Basketball_Record_Application/setting"
          element={<SelectPlayerPage />}
        />
        <Route
          path="/Basketball_Record_Application/boxscore"
          element={<BoxScorePage />}
        />
        <Route
          path="/Basketball_Record_Application/result"
          element={<GameResultPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
