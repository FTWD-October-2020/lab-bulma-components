import React from 'react';
import NavBar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'
import CoolButton from './coolbutton/CoolButton.js'

const App = () => {
  return (
    <>
      <NavBar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" animal='giraffe' type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton name="Submit" classes="is-success"/>
    </>
  );
};

export default App;
