import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './components/form/Form';
import If from './components/if/If';
import Results from './components/results/Results';
import History from './components/history/History';
import Header from './components/header/Header';

import './components/header/Header.scss';
import './components/form/Form.scss';
import './components/results/Results.scss';
import './components/history/History.scss';
import './design/design.scss'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'GET',
      body: '',
      headers: '',
      responseBody: '',
      responseHeaders: '',
      history: [],
      loading: false,
    };
}

  onURLChange(e) {
    this.setState({ ...this.state, url: e.target.value });
  }

  onMethodChange(e) {
    this.setState({ ...this.state, method: e.target.value });
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  onHeadersChange(e) {
    this.setState({ headers: e.target.value });
  }

  async onRerun(request) {
    await this.setState({
        url: request.url,
        body: request.body,
        method: request.method,
        headers: request.headers,
    });
    await this.onSubmit({ rerun: true });
}
async onSubmit(e) {
  await this.setState({ loading: true });
  let request = {
      url: this.state.url,
      method: this.state.method,
      headers: this.state.headers,
      body: this.state.body,
  };

  let resBody = {};
  let resHeaders = {};

  let res = await fetch(this.state.url, {
      method: this.state.method,
      body:
          this.state.method === 'GET'
              ? null
              : this.state.body
              ? JSON.parse(this.state.body)
              : null,
      headers: this.state.headers
          ? {
                ...JSON.parse(this.state.headers),
                Accept: 'application/json',
            }
          : { Accept: 'application/json' },
  });

  if (res.status === 200 || res.status === 201) {
      if (!e.rerun)
          await this.setState({
              history: [...this.state.history, request],
          });

      resBody = await res.json();

      for (const entry of res.headers.entries()) {
          resHeaders[entry[0]] = entry[1];
      }
  } else {
      resBody = res.status + res.statusText;
  }

  this.setState({
      loading: false,
      responseBody: resBody,
      resHeaders: resHeaders,
  });
}

//see 10:19, loading at 10:23

render() {
  return (
      <div className='App'>
          <BrowserRouter>
              <Header />
              <Route path='/' exact>
                  <Form
                      url={this.state.url}
                      body={this.state.body}
                      headers={this.state.headers}
                      onURLChange={this.onURLChange.bind(this)}
                      onMethodChange={this.onMethodChange.bind(this)}
                      onBodyChange={this.onBodyChange.bind(this)}
                      onHeadersChange={this.onHeadersChange.bind(this)}
                      onSubmit={this.onSubmit.bind(this)}
                  />

                  <History
                      size='light'
                      history={this.state.history}
                      onRerun={this.onRerun.bind(this)}
                  />
                  <If
                      condition={
                          this.state.responseHeaders ||
                          this.state.responseBody
                      }
                  >
                      <Results
                          headers={this.state.responseHeaders}
                          body={this.state.responseBody}
                          tabWidth={5}
                      />
                  </If>

                  <If condition={this.state.loading}>
                      <h3>Loading...</h3>
                  </If>
              </Route>
              <Route path='/history' exact>
                  <History
                      history={this.state.history}
                      onRerun={this.onRerun.bind(this)}
                  />
              </Route>
          </BrowserRouter>
      </div>
  );
}
}

export default App;
