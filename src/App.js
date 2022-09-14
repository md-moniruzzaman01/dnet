import logo from './logo.svg';
import './App.css';
import Carosol from './components/HomePage/Carosol/Carosol';
import HomePage from './components/HomePage/HomePage';
import NavbarMain from './components/ShareFile/Navbar/NavbarMain';
import Footer from './components/ShareFile/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import AboutPageModal from './components/AboutPage/AboutPageModal';

function App() {
  return (
   <>
   <NavbarMain></NavbarMain>
   <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
       
       
      
    </Routes>
  
  <Footer></Footer>

  {/* About page modal */}
  <AboutPageModal></AboutPageModal>
   </>
  );
}

export default App;
