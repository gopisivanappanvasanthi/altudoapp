import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ArticleBase = (props) => (
  <div>
    <h1>
      <Text field={props.fields.articleTitle} />
    </h1>
    <br />
    <h3>
      <Text field={props.fields.articleBrief} />
    </h3>
  </div>
);

export default ArticleBase;
