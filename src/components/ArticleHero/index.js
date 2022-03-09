import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const ArticleHero = (props) => (
  <div>
    <Image field={props.fields.fullBleedImage} />
  </div>
);

export default ArticleHero;
