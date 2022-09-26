import { useFormikContext } from 'formik';
import { vaccines } from '../../assets/data';
import FieldCheck from '../../components/input/inputCheck';

const Vaccines = () => {
  // const {values} = useFormikContext();
  // console.log(values);
  return (
    <div className="container vaccines px-0 mt-4">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="fs-5 fw-bold">Vaccines:</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <label htmlFor="">Which one would you like to vaccines?:</label>
        </div>
        <div className="col">
          {vaccines.map((vaccine: string, index: number) => (
            <FieldCheck
              key={index}
              label={vaccine}
              name="vaccines"
              type="radio"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vaccines;
