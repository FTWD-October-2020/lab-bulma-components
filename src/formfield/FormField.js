import React from 'react';

function FormField(props) {
    console.log(props)
    return (
        <>
            <div className='field'>
                <label className='label'>{props.label}</label>
                <input type='text' placeholder={props.placeholder} />
            </div>

        </>

    )
}

export default FormField;