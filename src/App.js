import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from './components/js/nav.js';
import "./App.css";

import home from "./pages/js/home";
import CurrentVillager from "./pages/js/CurrentVillager";
import DreamVillager from "./pages/js/DreamVillager";
import Results from "./pages/js/Results";
import about from "./pages/js/about";

function App() {
  return (
    <div className="App">
      <Router>
          <Nav />
          <Route path="/home" component={home} />
          <Route path="/CurrentVillager" component={CurrentVillager} />
          <Route path="/DreamVillager" component={DreamVillager} />
          <Route path="/Results" component={Results} />
          <Route path="/about" component={about} />
        </Router>
    </div>
  );
}

export default App;
