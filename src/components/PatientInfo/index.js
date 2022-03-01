import React from 'react';
import { Text, DateField } from '@sitecore-jss/sitecore-jss-react';

const PatientInfo = (props) => (
  <div>
    <h1>Patient Info</h1>
    <Text field={props.fields.patientName} />
    <br />
    <Text field={props.fields.patientGender} />
    <br />
    <DateField field={props.fields.patientDob} />
    <br />
    <Text field={props.fields.patientNo} />
    <br />
    <Text field={props.fields.patientPhoneNumber} />
  </div>
);

export default PatientInfo;
