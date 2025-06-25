import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GoHomePage from "./components/pages/GoHomePage";
import HomePage from "./components/pages/HomePage";
import ContainerLayout from './components/layouts/ContainerLayout';
import styles from './components/layouts/ContainerLayout.module.css';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/valentines_day" element={<GoHomePage />} />
        <Route path="/valentines_day/home" element={<HomePage />} />
      </Routes>
    </Router>
  ) 
}

export default App;
