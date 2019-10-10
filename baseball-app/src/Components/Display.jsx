import React, { useState } from 'react';
import Dashboard from './Dashboard';

export default function Display () {
    const [strikes, setStrikes] = useState();
    const [balls, setBalls] = useState();
    const [hits, setHits] = useState();
    return (
        <div>
            <h1>Display</h1>
            <Dashboard />
        </div>
    )
}