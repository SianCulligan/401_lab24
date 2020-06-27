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
                <label>Enter API URL:</label>
                <input
                    type='text'
                    value={props.url}
                    onChange={props.onURLChange}
                />
            </div>

            <div className='method-select'>
                <select className='select-css' onChange={props.onMethodChange}>
                    <option>Select a method...</option>
                    <option value='GET'>Get</option>
                    <option value='POST'>Post</option>
                    <option value='PUT'>Put</option>
                    <option value='DELETE'>Delete</option>
                </select>
            </div>

            <div className='body-entry'>
                <label>BODY:</label>
                <textarea 
                    value={props.body}
                    onChange={props.onBodyChange}
                ></textarea>
            </div>

            <div className='header-entry'>
                <label>HEADERS:</label>
                <textarea 
                    value={props.headers}
                    onChange={props.onHeadersChange}
                ></textarea>
            </div>

            <button className="go" onClick={props.onSubmit}>Go</button>
        </div>
    );
}

export default Form;
