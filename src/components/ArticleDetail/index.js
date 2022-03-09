import React from 'react';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

const ArticleDetail = (props) => (
  <div>
    <RichText field={props.fields.detailedArticle} />
  </div>
);

export default ArticleDetail;
