import React, { useState } from 'react'

function Player({ initialName, symbol,isActive }) {
    const [playerName, setPlayerName]= useState(initialName)
  const [isEditing, setIsEditing] = useState(false)
  
  function handleEditClick(){
    setIsEditing((prev)=> !prev)
  }
  function handleChange(event){
    setPlayerName(event.target.value);
  }
  let editableplayerName =  <span className="player-name">{playerName}</span>
  if(isEditing){
    editableplayerName = <input type='text'value={playerName} onChange={handleChange}required/>
  }
  return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
       {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Edit':'Save'}</button>
    </li>
  )
}

export default Player