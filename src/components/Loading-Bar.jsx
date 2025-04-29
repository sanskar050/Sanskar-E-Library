import React, { useEffect } from 'react';
import './Loading-Bar.css';

const LoadingBar = () => {
    useEffect(() => {
        const loadingBar = document.getElementById('loadingBar');
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                loadingBar.style.background = 'aliceblue';
                return;
            }
            width += 1;
            if (loadingBar) {
                loadingBar.style.width = width + '%';
            }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
            <div className="loading-container">
                <div className="loading-bar" id="loadingBar"></div>
            </div>
    );
};

export default LoadingBar;