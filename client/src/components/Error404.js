import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './Error404.css';

export default function Error404() {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/');
        }, 2000);
    }, [history]);
    
    return (
        <div className="error-container">
            <h1>404</h1>
            <h3>Page Not Found!</h3>
            <h4>You will go to home page automatically</h4>
        </div>
    )
}
