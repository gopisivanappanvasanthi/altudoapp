import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

class AppSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      searchKeyword: '',
      searchResults: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      searchKeyword: event.target.value,
    });
  }
  handleSubmit(event) {
    alert('Now the search begins for the keyword: ' + this.state.searchKeyword);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ searchKeyword: this.state.searchKeyword }),
    };
    fetch('/altudoapi/StandardResult', requestOptions)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            error: null,
            isLoaded: true,
            searchResults: result,
          });
        },
        (error) => {
          this.setState({
            error,
            isLoaded: true,
          });
        }
      );
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} id="searchKeyword" />
        <input type="submit" onClick={this.handleSubmit} value="submit" />
        <div>
          {this.state.searchResults.map((res) => (
            <div key={res.SearchTitle}>
              <a href={res.SearchTileUrl}>
                <h3>{res.SearchTitle}</h3>
              </a>
              <br />
              <p>{res.SearchDescription}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AppSearch;
