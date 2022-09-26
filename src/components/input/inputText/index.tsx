// import { Field } from 'formik';
import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';

interface PropsFieldInput {
  name: string;
  label: string;
  type: string;
}

const FieldInput: React.FC<PropsFieldInput> = ({ ...props }) => {
  const renderError = (mgs: string) => (
    <p className="text-danger mb-0" style={{fontSize:'0.8rem'}}>{mgs}</p>
  );

  const [field, meta] = useField(props);

  return (
    <div>
      <label className="mb-2" htmlFor={props.label}>
        {props.label}
      </label>
      <span
        className={`text-danger ${
          props.type !== 'date' ? 'd-inline' : 'd-none'
        }`}
      >
        *
      </span>
      <Field
        {...field}
        name={props.name}
        type={props.type}
        id={props.name}
        className={`d-block w-100 form-control ${
          meta.error && meta.touched ? 'is-invalid' : ''
        }`}
        placeholder={`${props.label}...`}
        autoComplete="on"
      />
      {meta.touched && meta.error && (
        <ErrorMessage name={props.name} render={renderError} />
      )}
      
    </div>
  );
};

export default FieldInput;
