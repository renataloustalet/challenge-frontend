import './App.scss';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NutritionalInformation from './components/NutritionalInformation';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Home />
        <NutritionalInformation />
        <Products />
        <Footer />
      </div>
    </div>
  );
}

export default App;
