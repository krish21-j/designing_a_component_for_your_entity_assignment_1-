import React from "react";
import Usercard from "./components/usercard"; 


function App() {
  const users = [
    {
      profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1 234 567 890",
      address: "123 Main St, Springfield, USA",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", padding: "16px" }}>
      {users.map((user, index) => (
        <Usercard key={index} {...user} />
      ))}
    </div>
  );
}

export default App;
