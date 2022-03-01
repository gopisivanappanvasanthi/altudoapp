import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const DoctorInfo = (props) => (
  <div>
    <h1>Doctor Details</h1>
    <h3>
      <Text field={props.fields.doctorName} />
    </h3>
    <div>
      <Text field={props.fields.doctorQualification} />
    </div>
    <div>
      <Text field={props.fields.doctorSpecialization} />
    </div>
    <div>
      <Text field={props.fields.doctorExperience} />
    </div>
  </div>
);

export default DoctorInfo;
