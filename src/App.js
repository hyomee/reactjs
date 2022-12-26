import './App.css';
import React from 'react';

import Hooks from './Hook/Hooks';
import HookMultiState from './Hook/HookMultiState';

const App = () => {
    return ( 
        <div>
            <Hooks />
            <HookMultiState />
        </div> 
    );
};

export default App;