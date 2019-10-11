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
            {balls > 4 && (
                setBalls(0)
            )}
            <button onClick={() => strikes < 2 ? setStrikes(strikes + 1) : setStrikes(strikes)}>Add foul</button>
            <form type="submit">
                <h2>Set a player to bat!</h2>
                <input type="text" value={player} onChange={e => setPlayer(e.target.value)}/>
            </form>
        </div>
    )
}