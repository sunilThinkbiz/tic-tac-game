import React, { useState } from 'react'

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false)
  
  function handleEditClick(){
    setIsEditing((prev)=> !prev)
  }
  let playerName =  <span className="player-name">{name}</span>
  if(isEditing){
    playerName = <input type='text' required/>
  }
  return (
    <li>
      <span className="player">
       {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Edit':'Save'}</button>
    </li>
  )
}

export default Player