import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageRender from './PageRender';

function App() {
    return (
        <Router>
            <input type="checkbox" id="theme" />
            <div className="App">
                <Routes>
                    <Route path="/:page" element={<PageRender />} />
                    <Route path="/:page/:id" element={<PageRender />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
