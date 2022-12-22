import './App.css';
import React from 'react';

import HookUseState from './Hook/HookUseState';
import HookMultiState from './Hook/HookMultiState';

const App = () => {
    return ( 
        <div>
            <HookUseState />
            <HookMultiState />
        </div> 
    );
};

export default App;