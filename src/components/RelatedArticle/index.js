import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

class RelatedArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articleList: [],
      incomingProps: props,
    };
    console.log(this.state);
  }
  getArticles = () => {
    fetch('/altudoapi/GetArticles')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            articleList: result,
            incomingProps: this.props,
          });
          console.log(this.state);
        },
        (error) => {
          this.setState({
            error,
            isLoaded: true,
          });
        }
      );
  };
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>
            <Text field={this.state.incomingProps.fields.relatedArticleTitle} />
            <input type="button" onClick={this.getArticles} value="Show Articles" />
            <div>Error Occurred</div>
          </h1>
        </div>
      );
    } else if (!this.state.isLoaded) {
      return (
        <div>
          <h1>
            <Text field={this.state.incomingProps.fields.relatedArticleTitle} />
            <input type="button" onClick={this.getArticles} value="Show Articles" />
            <div>Loading....</div>
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>
            <Text field={this.state.incomingProps.fields.relatedArticleTitle} />
            <input type="button" onClick={this.getArticles} value="Show Articles" />
            <div>
              {this.state.articleList.map((article) => (
                <li key={article.Name}>
                  <div>{article.Title}</div>
                  <br />
                  <div>{article.Brief}</div>
                  <img src={article.ImageUrl} alt={article.Title}></img>
                  <br />
                </li>
              ))}
            </div>
          </h1>
        </div>
      );
    }
  }
}

export default RelatedArticle;
