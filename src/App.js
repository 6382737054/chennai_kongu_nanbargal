import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderLayout from "./components/navbar";
import HomePage from "./pages/homepage";
import HistoryPage from "./pages/history";
import MagazinePage from './pages/Magazine';
import Footer from './components/footer';
import MajorActivities from './pages/services';
import ContactPage from './pages/Contactus';
import GalleryPage from './pages/gallery';

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
          <Route path="/activities" element={<MajorActivities/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/gallery" element={<GalleryPage/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;