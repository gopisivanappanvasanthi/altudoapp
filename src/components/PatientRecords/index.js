import React from 'react';
import { DateField, RichText } from '@sitecore-jss/sitecore-jss-react';

const PatientRecords = (props) => {
  const patientRecordsList = props.fields.records;
  return (
    <div>
      <h1>Patient Records</h1>
      {patientRecordsList &&
        patientRecordsList.map((listItem, index) => (
          <div key={`patientrecordlistitem-${index}`}>
            <p>
              <RichText field={listItem.fields.prescription} />
            </p>
          </div>
        ))}
    </div>
  );
};
export default PatientRecords;
