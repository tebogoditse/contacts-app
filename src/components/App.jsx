import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function createCard(card) {
  return (
    <Card
      name = {card.name}
      img = {card.imgURL}
      phone = {card.phone}
      email = {card.email} 
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;