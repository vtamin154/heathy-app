import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';

interface PropsSelect {
  label: string;
  options: any;
  // className:string;
  name: string;
}
const FieldSelect: React.FC<PropsSelect> = ({ label, ...props }) => {
  const renderError = (mgs: string) => (
    <p className="text-danger mb-0 mt-1" style={{fontSize:'0.8rem'}}>{mgs}</p>
  );

  const [field, meta] = useField(props);
  // console.log(field);
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <span className={`text-danger`}>*</span>
      <Field
        as="select"
        className={`form-select mt-2 ${
          meta.error && meta.touched ? 'is-invalid' : ''
        }`}
        id={label}
        {...field}
      >
        <option>-----Choose</option>

        {props.options &&
          props.options.map((option: any, index: number) =>
            typeof option === 'object' ? (
              <option key={index} value={option[0]}>
                {option[0]}
              </option>
            ) : (
              <option key={index} value={option}>
                {option}
              </option>
            )
          )}
      </Field>
      {meta.error && meta.touched && (
        <ErrorMessage name={props.name} render={renderError} />
      )}
    </div>
  );
};

export default FieldSelect;
