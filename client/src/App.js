import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageRender from './PageRender';
import Home from './pages/home';  // Ensure this matches the exact file name
import Login from './pages/login';  // Ensure this matches the exact file name

function App() {
    return (
        <Router>
            <input type="checkbox" id="theme" />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />  {/* Example route for Home */}
                    <Route path="/:pages" element={<PageRender />} />
                    <Route path="/:pages/:id" element={<PageRender />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
