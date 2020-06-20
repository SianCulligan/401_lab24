//IF results are present 

// IF loading bar during fetch process

import React from 'react';


function If(props) {
    if (props.condition) {
        return  <>{props.children}</>
    } else {
        return null;
    }};

export default If;