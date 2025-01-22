import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      
      <Card 
      name={contacts[1].name}
      img={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email}
      />
      <Card 
      name={contacts[2].name}
      img={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email}
      />
      <Card 
      name={contacts[3].name}
      img={contacts[3].imgURL}
      phone={contacts[3].phone}
      email={contacts[3].email}
      />
    </div>
  );
}

//export default App;
