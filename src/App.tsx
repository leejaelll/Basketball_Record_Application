// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SelectPlayerPage from './pages/SelectPlayerPage';
import BoxScorePage from './pages/BoxScorePage';
import GameResultPage from './pages/GameResultPage';

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setting" element={<SelectPlayerPage />} />
        <Route path="/boxscore" element={<BoxScorePage />} />
        <Route path="/result" element={<GameResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
