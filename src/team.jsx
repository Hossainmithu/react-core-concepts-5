import { useState } from "react"

export default function Team(){
  const [team, setTeam] = useState(11);

  const handlaAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  }

  const handleRemove = () =>{
    const newTeam = team - 1;
    setTeam(newTeam);
  }

  const teamStyle = {
    border: '2px solid purple',
    margin: '20px',
    padding: '20px',
    borderRadius: '15px'
  }
  return (
    <div style={teamStyle}>
      <h3>Players : {team}</h3>
      <button onClick={handlaAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}