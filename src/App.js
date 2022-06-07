//css
import './App.css';
//components
import Hero from './components/Hero';
import Header from './components/header/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import Locations from './components/locations/Locations';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Article />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
