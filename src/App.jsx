import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import FontLoader from "react-google-font-loader"; //fuentes google

const fontConfig = [
  {
    font: "Allura",
    weights: [400, 700],
  },
  {
    font: "Viga",
    weights: [400],
  },
  {
    font: "Adamina",
    weights: [400],
  },
  {
    font: "Bungee",
    weights: [400],
  }
];


function App() {

  return (
    <Router>
      <div className="App">
        <FontLoader fonts={fontConfig} />
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App