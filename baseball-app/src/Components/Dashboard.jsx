import React from 'react';


export default function Dashboard ({ setStrikes, strikes, balls, setBalls, hits, setHits, player, setPlayer, fouls, setFouls }) {
    const foulLogic = () => {
        // if (fouls === 1) {
        //     setBalls(balls + 1),
        //     setStrikes(strikes + 1)
        // } else if (fouls >= 2) {
        //     setBalls(balls + 2),
        //     setStrikes(strikes + 2)
        // }
        setFouls(fouls + 1)
    }
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
            <button onClick={() => setFouls(foulLogic)}>Add foul</button>
            {/* {fouls > 1 && (
                setBalls(balls + 1)
            )} */}
            <form type="submit">
                <input type="text" value={player} onChange={e => setPlayer(e.target.value)}/>
            </form>
        </div>
    )
}