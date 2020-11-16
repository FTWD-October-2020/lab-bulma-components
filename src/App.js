import React from 'react';
import NavBar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'

const App = () => {
  return (
    <>
      <NavBar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" animal='giraffe' type="email" placeholder="e.g. alexsmith@gmail.com" />
    </>
  );
};

export default App;
