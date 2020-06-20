import React from 'react';

// props.className = optional classnames
// props.style = optional in-line style
// props.url = the current url entry
// props.onURLChange = the callback for the text input
// props.onMethodChange = the callback for the select
// props.onSubmit = the callback for when the form is submitted



//props.JSONentry
//props.json
//props.onJSONChange

function Form(props) {
    return (
        <div className={props.className} style={props.style}>
            <div className='url-entry'>
                <label>API URL:</label>
                <input
                    type='text'
                    value={props.url}
                    onChange={props.onURLChange}
                />
            </div>
            <div className={props.JSONentry}>
            <div className='json-entry'>
                <input
                    type='text'
                    value={props.json}
                    onChange={props.onJSONChange}
                />
            </div>

            </div>
            <div className='method-select'>
                <select onChange={props.onMethodChange}>
                    <option value='GET'>Get</option>
                    <option value='POST'>Post</option>
                    <option value='PUT'>Put</option>
                    <option value='DELETE'>Delete</option>
                </select>
            </div>
            <button onClick={props.onSubmit}>Submit</button>
        </div>
    );
}

export default Form;
