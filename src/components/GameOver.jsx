import React from 'react'

export const GameOver = ({winner, onRestart}) => {
    return (
        <div id="game-over">
            <h2>Game Ove!r</h2>
           { winner && <p>{winner} won!</p>}
           {!winner && <p>It&apos;s a draw</p>}
            <p><button onClick={onRestart}>Rematch</button></p>
        </div>
    )
}
