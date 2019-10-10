import React from 'react';


export default function Dashboard ({ setStrikes, strikes, balls, setBalls, hits, setHits, player, setPlayer }) {
    return (
        <div>
            <h1>Dashboard</h1>
            
            <button onClick={() => setStrikes(strikes + 1)}>Add strike</button>
            {strikes > 3 && (
                setStrikes(0)
            )}

            <button onClick={() => setBalls(balls + 1)}>Add Ball</button>
            {balls > 5 && (
                setBalls(0)
            )}
        </div>
    )
}