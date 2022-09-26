import FieldInput from '../../components/input/inputText';
import FieldSelect from '../../components/selection';
import { optionsObject, gender, nationality } from '../../assets/data';


// import './style.css';

const PersonalInfor = () => {
  return (
    <div className="container personal-infor px-0">
      <div className="row mt-3">
        <div className="col-lg-12">
          <h4 className="fs-5 fw-bold">Personal information:</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <FieldInput type="text" label="Full name" name="fullname" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-6">
          <FieldSelect options={optionsObject} label="Object" name="object" />
        </div>

        <div className="col-lg-3">
          <FieldInput label="Date of birth" type="date" name="birth" />
        </div>
        <div className="col-lg-3">
          <FieldSelect options={gender} label="Gender" name="gender" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-6">
          <FieldSelect
            options={nationality}
            label="Nationality"
            name="nationality"
          />
        </div>
        <div className="col-lg-6">
          <FieldInput
            type="text"
            label="Nation ID of Passport ID"
            name="passport"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfor;
