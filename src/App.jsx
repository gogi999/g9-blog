import React from 'react';

import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;