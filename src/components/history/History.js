// Create a new <History/> page component that will:
// Show a list of URLs you’ve loaded before
// Show full details of each search
// Add a button to each to re-run the search
// Redirect to the home page to show the results

// THIS PAGE CALLS IN IF.JS


import React from 'react';
import If from '../if/If'
import { Redirect } from 'react-router-dom';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    onRerun(request) {
        this.props.onRerun(request);
        this.setState({ redirect: true });
    }

    render() {
        let historyElements = [];

        for (let i = 0; i < this.props.history.length; i++) {
            if (this.props.size === 'light') {
                historyElements.push(
                    <div key={i}>
                        <span className='url'>{this.props.history[i].url}</span>
                        <span className='method'>
                            {this.props.history[i].method}
                        </span>
                        <button
                            onClick={(e) => {
                                this.onRerun(this.props.history[i]);
                            }}>Rerun</button>
                    </div>
                );
            } else {
                historyElements.push(
                    <div key={i}>
                        <span className='url'>{this.props.history[i].url}</span>
                        <span className='method'>
                            {this.props.history[i].method}
                        </span>
                        <button
                            onClick={(e) => {this.onRerun(this.props.history[i]);
                            }}
                        >Rerun</button>
                        <div>
                            <span>{this.props.history[i].body}</span>
                            <span>{this.props.history[i].headers}</span>
                        </div>
                    </div>
                );
            }
        }

        return (
            <>
                <If condition={this.state.redirect}>
                    <Redirect push to='/' />
                </If>
                <If condition={!this.state.redirect}>
                    <div
                        className={this.props.className}
                        style={this.props.style}
                    >{historyElements}</div>
                </If>
            </>
        );
    }
}

export default History;