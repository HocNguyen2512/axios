import './App.css';
import Intro from '../src/component/Intro/Intro';
import Navbar from './component/Navbar/Navbar';
import Services from './component/Services/Services';
import Experience from './component/Experience/Experience';
import Works from './component/Works/Works';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import {themeContext} from './context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? "black":"",
      color: darkMode? "white": ""
    }}
    >
      <Navbar/>
      <Intro/>
      <Services />
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
