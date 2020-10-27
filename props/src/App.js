import React from 'react';
import './App.css'

import ContactCard from './ContactCard'

function App() {
  return (
    <div >
      <ContactCard 
      contact={{
      name:"Miss Almaz",
      imgUrl:"http://placekitten.com/300/200",
      phone:"0960932547",
      email:"almialmi61621@gmail.com"

      }}
      
      />
      <ContactCard 
      contact={{
      name:"Mr.kebede",
      imgUrl:"http://placekitten.com/400/200",
      phone:"0960932547",
      email:"almialmi61621@gmail.com"

      }}
      
      />
      <ContactCard 
      contact={{
      name:"Miss Ballerina",
      imgUrl:"http://placekitten.com/400/300",
      phone:"0960932547",
      email:"almialmi61621@gmail.com"

      }}
      
      />
      <ContactCard 
      contact={{
        name:"Mr.John",
        imgUrl:"http://placekitten.com/200/100",
        phone:"0960932547",
        email:"almialmi61621@gmail.com"


      }}
      />
    </div>
  );
}

export default App;
