import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderLayout from "./components/navbar";
import HomePage from "./pages/homepage";
import HistoryPage from "./pages/history";
import MagazinePage from './pages/Magazine';

function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderLayout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/magazine" element={<MagazinePage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;