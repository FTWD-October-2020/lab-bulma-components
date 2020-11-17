import React from 'react';
import NavBar from '../navbar/Navbar.js'
import FormField from '../formfield/FormField.js'
import CoolButton from '../coolbutton/CoolButton.js'


function Signup() {
    return (
        <>

            <NavBar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*****" />
            <CoolButton name="Submit" classes="is-success" />

        </>
    )
}


export default Signup;