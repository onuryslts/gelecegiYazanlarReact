import React,{useState} from 'react'

function Colors() {
  const [colors, setColors] = useState(['red','green','blue']);
  const handleClick = () =>{
    setColors((prev) => [...prev, Math.random()]);
  }
  return (
    <div>
      <h2>Renkler</h2>
      {
        colors.map((color,i)=>(
          <div key={i}>{color}</div>
        ))}
        <button onClick={handleClick}>Ekle</button>
    </div>
  )
}

export default Colors