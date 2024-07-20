import {BrowserRouter as Router, Routes} from 'react-router-dom'
import PageRender from './PageRender'

function App() {
  return (
    <Router>
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className='App'>
          <Routes exact path="/:page" component={PageRender} />
          <Routes exact path ="/:page/:id" component={PageRender} />
        </div> 
      </div>
    </Router>
  );
}

export default App;
