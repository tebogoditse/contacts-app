import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map( card => <Card name = {card.name} img = {card.imgURL} phone = {card.phone} email = {card.email} />)}
    </div>
  );
}

export default App;