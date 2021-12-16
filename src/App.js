import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResult';
import ImageResult from './pages/ImageResult/ImageResult';

import './App.css';

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>

          {/* Home (the one with the search on) */}
          <Route path="/" exact>
            <Home />
          </Route>

          {/* SearchPage (The results page) */}
          <Route path="/search">
            <SearchResult />
          </Route>
          <Route path="/image">
            <ImageResult />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;