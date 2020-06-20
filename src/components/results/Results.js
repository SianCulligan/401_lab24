import React from 'react';

// Alter the <Results /> component as follows:
// Add support for all REST methods
// THIS COMPONENT CALLS THE IF JS FILE




function Results(props) {
   
    return (
        <>
        <div className={props.className} style={props.style}>

            <div className='headers'>
                <pre>{JSON.stringify(props.headers, null, props.tabWidth)}</pre>
            </div>
            <div className='body'>
                <pre>{JSON.stringify(props.body, null, props.tabWidth)}</pre>
            </div>
        </div>
        </>
    );
}

export default Results;