import React from 'react';
import '../components/loading-screen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen-overlay">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    );
};

export default LoadingScreen;