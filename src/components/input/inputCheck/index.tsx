import { Field } from 'formik';
import React from 'react';

interface PropsFieldCheck {
  name: string;
  label: string;
  type: string;
}

const FieldCheck: React.FC<PropsFieldCheck> = ({ ...props }) => {
  return (
    <label className="d-inline-block me-4">
      <Field
        type={props.type}
        className="me-1 form-check-input"
        value={props.label}
        name={props.name}
      />
      {props.label}
    </label>
  );
};

export default FieldCheck;
