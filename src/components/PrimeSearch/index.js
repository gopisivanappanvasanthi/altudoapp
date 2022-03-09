import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

class PrimeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incomingProps: props,
      searchKeyword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      incomingProps: this.props,
      searchKeyword: event.target.value,
      searchResult: [],
    });
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.searchKeyword);
    const searchApiUrl = 'altudo/GetSearchResult';
    const postBody = {
      Term: this.state.searchKeyword,
    };
    const requestMetaBody = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody),
    };
    fetch(searchApiUrl, requestMetaBody)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          searchResult: result,
        });
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Text field={this.state.incomingProps.fields.heading} />
        <br />
        <input type="text" onChange={this.handleChange}></input>
        <input type="submit" onClick={this.handleSubmit} value="Submit" />
        <div>
          {this.state.searchResult.map((result) => (
            <div key="searchresult-{result.ResultTitle}">
              <div>
                <a href={result.ResultUrl}>result.ResultTitle</a>
              </div>
              <div>result.ResultDescription</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PrimeSearch;
