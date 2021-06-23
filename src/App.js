import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from './components/js/nav.js';
import "./App.css";

import Home from "./pages/js/home";
import CurrentVillager from "./pages/js/CurrentVillager";
import DreamVillager from "./pages/js/DreamVillager";
import Results from "./pages/js/Results";
import about from "./pages/js/about";

const villagersJson = require("./assets/villagers.json");

function App() {
  const [selectedVillagers, setSelectedVillagers] = useState([]);
  const [selectedDrVillagers, setSelectedDrVillagers] = useState([]);
  const [villagerInfo, setVillagerInfo] = useState([]);

  useEffect(() => {
    let unsorted = Object.values(villagersJson);
    unsorted.sort((a,b) => {
      if (a.name["name-USen"] < b.name["name-USen"]) {
        return -1;
      }
      if (a.name["name-USen"] > b.name["name-USen"]) {
        return 1;
      }
      return 0;
    });
    setVillagerInfo(unsorted);
  }, []);

  return (
    <div className="App">
      <Router basename="/acnh-dreamy-finder">
          <Nav setSelectedVillagers={setSelectedVillagers} setSelectedDrVillagers={setSelectedDrVillagers}/>
          <Route path={"/(home|)"}
            render={()=> (<Home setSelectedVillagers={setSelectedVillagers} setSelectedDrVillagers={setSelectedDrVillagers}/>)}
          />
          <Route path="/CurrentVillager"
            render={()=> (<CurrentVillager villagerInfo={villagerInfo} selectedVillagers={selectedVillagers} setSelectedVillagers={setSelectedVillagers}/>)}
          />
          <Route path="/DreamVillager"
            render={()=> (<DreamVillager villagerInfo={villagerInfo} selectedVillagers={selectedDrVillagers} setSelectedVillagers={setSelectedDrVillagers} prevSelectedVillagers={selectedVillagers}/>)}
          />
          <Route path="/Results" 
            render={()=> (<Results villagerInfo={villagerInfo} selectedVillagers={selectedVillagers} selectedDrVillagers={selectedDrVillagers} setSelectedVillagers={setSelectedVillagers} setSelectedDrVillagers={setSelectedDrVillagers}/>)} 
          />
          <Route path="/about" component={about} />
        </Router>
    </div>
  );
}

export default App;
