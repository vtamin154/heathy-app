import React from 'react';
import { Form, Formik } from 'formik';
import { initialValues } from '../../assets/initial';
import { validation } from '../../assets/validate';
import { TValuesForm } from '../../assets/type';
import PersonalInfor from '../../containers/personal_infor';
import Travel from '../../containers/travel';
import Contact from '../../containers/contact';
import Symptoms from '../../containers/symptoms';
import Vaccines from '../../containers/vaccines';
import { useNavigate } from 'react-router-dom';

interface PropsFormField {
  dataEdit?: TValuesForm;
  handleSubmit: (key: string, values: TValuesForm) => void;
}

const FormField: React.FC<PropsFormField> = ({ dataEdit, handleSubmit }) => {
  const navigate = useNavigate();
  //   console.log(dataEdit);
  return (
    <div>
      <Formik
        initialValues={dataEdit ? dataEdit : initialValues}
        validationSchema={validation}
        onSubmit={(values, _) => {
          handleSubmit('register-form', values as TValuesForm);
        }}
      >
        {(props) => {
          const handleAction = (confirmMsg: string, action: any) => {
            // if (props.dirty) { //dirty để kiểm tra xem dữ liệu có được nhập mới vào ko
              const confirm: boolean = window.confirm(confirmMsg);
              return confirm ? action() : null;
            // }
          };
          return (
            <Form>
              <PersonalInfor />
              <Travel />
              <Contact />
              <Symptoms />
              <Vaccines />
              <button
                type="submit"
                className="btn btn-success mt-4 px-3 py-2 fs-5"
              >
                Submit
              </button>
              <button
                className="btn btn-danger mt-4 mx-3 px-3 py-2 fs-5"
                onClick={() =>
                  handleAction('Do you want to cancel?', navigate('/table'))
                }
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-secondary mt-4 px-3 py-2 fs-5"
                onClick={() =>
                  handleAction('Do you want to reset?', props.resetForm)
                }
              >
                Reset
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormField;
