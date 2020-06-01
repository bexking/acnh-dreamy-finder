import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from './components/js/nav.js';
import "./App.css";

import home from "./pages/js/home";
import CurrentVillager from "./pages/js/CurrentVillager";
import DreamVillager from "./pages/js/DreamVillager";
import Results from "./pages/js/Results";
import about from "./pages/js/about";


function App() {
  const [selectedVillagers, setSelectedVillagers] = useState([]);
  const [selectedDrVillagers, setSelectedDrVillagers] = useState([]);

  return (
    <div className="App">
      <Router>
          <Nav />
          <Route path="/home" component={home} />
          <Route path="/CurrentVillager"
            render={()=> (<CurrentVillager selectedVillagers={selectedVillagers} setSelectedVillagers={setSelectedVillagers}/>)}
          />
          <Route path="/DreamVillager"
            render={()=> (<DreamVillager selectedVillagers={selectedDrVillagers} setSelectedVillagers={setSelectedDrVillagers}/>)}
          />
          <Route path="/Results" component={Results} />
          <Route path="/about" component={about} />
        </Router>
    </div>
  );
}

export default App;
