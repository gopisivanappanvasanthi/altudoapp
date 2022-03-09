import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const ArticleImage = (props) => (
  <div>
    <Image
      field={props.fields.featuredImage}
      srcSet={[{ mw: 300 }, { mw: 100 }]}
      sizes="(min-width: 960px) 300px, 100px"
      className="img-fluid"
    />
  </div>
);

export default ArticleImage;
