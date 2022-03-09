import React from 'react';
import { Text, DateField } from '@sitecore-jss/sitecore-jss-react';

const PatientInfo = (props) => (
  <div>
    <h1>Patient Info</h1>
    <Text field={props.fields.patientName} />
    <br />
    <Text field={props.fields.patientGender} />
  </div>
);

export default PatientInfo;
