//css
import './App.css';
//components
import Hero from './components/Hero';
import Header from './components/header/Header';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Article />
    </div>
  );
}

export default App;
