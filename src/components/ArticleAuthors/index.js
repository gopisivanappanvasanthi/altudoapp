import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';

const ArticleAuthors = ({ fields, rendering }) => {
  console.log(rendering);
  const authors = fields.authors;
  return (
    <div>
      <h1>Authors</h1>
      {authors &&
        authors.map((listItem, index) => {
          return (
            <div key={`authorslistitem-${index}`}>
              <h5>
                <Link field={listItem.fields.doctorUrl}>
                  <Text field={listItem.fields.doctorName} />
                </Link>{' '}
                | <Text field={listItem.fields.doctorQualification} />
              </h5>
              <h5>
                <Text field={listItem.fields.doctorSpecialization} />
              </h5>
            </div>
          );
        })}
    </div>
  );
};

export default ArticleAuthors;
