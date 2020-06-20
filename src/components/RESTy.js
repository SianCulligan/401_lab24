import React from 'react';
import Form from './form/Form';
import Results from './results/Results';

// FORM
// props.className = optional classnames
// props.style = optional in-line style
// props.url = the current url entry
// props.onURLChange = the callback for the text input
// props.onMethodChange = the callback for the select
// props.onSubmit = the callback for when the form is submitted

// RESULTS
// props.className = optional classnames
// props.style = optional in-line style
// props.headers = the header data (raw json)
// props.body = the body data (raw json)
// props.tabWidth = the spaces for tabs when pretty-printed
class RESTy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: 'GET',
            headers: {},
            body: {},
        };
    }

    onURLChange(e) {
        this.setState({ ...this.state, url: e.target.value });
    }

    onMethodChange(e) {
        this.setState({ ...this.state, method: e.target.value });
    }

    async onSubmit(e) {
        console.log(
            'Attempting to make a ',
            this.state.method,
            'request to ',
            this.state.url,
        );

        let body;
        let headers = {};

        let res = await fetch(this.state.url, {
            method: this.state.method,
            headers: {
                Accept: 'application/json',
            },
        });

        if (res.status === 200) {
            body = await res.json();

            for (const entry of res.headers.entries()) {
                headers[entry[0]] = entry[1];
            }
        }

        this.setState({ headers, body });
    }

    render() {
        return (
            <>
                <Form
                    url={this.state.url}
                    onURLChange={this.onURLChange.bind(this)}
                    onMethodChange={this.onMethodChange.bind(this)}
                    onSubmit={this.onSubmit.bind(this)}
                />
                <Results
                    tabWidth={2}
                    headers={this.state.headers}
                    body={this.state.body}
                />
            </>
        );
    }
}

export default RESTy;




// import React from 'react';

// // empty props.children.length
// function HomePage(props) { 
//     return(
//         <>
//             <header>
//                 <h1>
//                     Home
//                 </h1>
//             </header>
//             <div className='container'>
//                 {!props.children ? <p>No content added yet</p> : ''}
                
//                 {props.children.length ? props.children : props.children ? <div>{props.children}
                
//                 (<div style={{color: 'red' }}> {props.children}</div>


//                 {props.children}
//                 {/* takes in the child element of <HomePage>CHILD</HomePage>  from the  App.js code */}
//             </div>
//         </>
//     )
// }

// export default HomePage