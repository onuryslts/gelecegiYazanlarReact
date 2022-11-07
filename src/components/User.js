import React, { useState } from "react";

function User() {
  const [user, setUser] = useState({ name: "Onur", surname: " Yeşiltaş" });
  return (
    <div>
      <h2>User</h2>
      {user.name} 
      {user.surname}
      <br/>
      <br/>
      
      <button onClick={()=> setUser((prev) => ({...prev, name:'Ahmet'}))}>İsmi Değiştir</button>
      <button onClick={()=> setUser((prev) => ({...prev, surname:' Uzun'}))}>Soyismi Değiştir</button>

    </div>
  );
}

export default User;
