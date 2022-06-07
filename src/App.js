//css
import './App.css';
//hooks
import { useState } from 'react';
//components
import Hero from './components/Hero';
import Header from './components/header/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import Locations from './components/locations/Locations';
import SlidingMenu from './components/SlidingMenu';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="App">
      <Header setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Article />
      <Locations />
      <Footer />
      <SlidingMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default App;
