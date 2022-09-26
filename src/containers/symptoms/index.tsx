import { useFormikContext } from 'formik';
import { symptoms } from '../../assets/data';
import { TValuesForm } from '../../assets/type';
import FieldCheck from '../../components/input/inputCheck';

const Symptoms = () => {

    const {values, submitForm} = useFormikContext<TValuesForm>();
    // console.log(values.symptoms);
  return (
    <div className="container symptoms px-0 mt-4">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="fs-5 fw-bold">Symptoms:</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <label htmlFor="">Do you have any following symptoms?:</label>
        </div>
        <div className="col">
          {symptoms.map((symptom: string, index: number) => (
            <FieldCheck
              key={index}
              label={symptom}
              name='symptoms'
              type="checkbox"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
