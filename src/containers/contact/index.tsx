import { useFormikContext } from 'formik';
import FieldSelect from '../../components/selection';
import { provinces } from '../../assets/data';
import FieldInput from '../../components/input/inputText';
import { TValuesForm } from '../../assets/type';
import { useEffect, useState } from 'react';

const Contact = () => {
  const { values, submitForm } = useFormikContext<TValuesForm>();

  const listProvince = Object.values(provinces).map((item) => [
    // item[0],
    item[1].name,
  ]);

  // console.log(listProvince)

  // console.log(values.province);
  const listDistrict = Object.values(provinces).filter((item) =>
    item[1].name === values.province ? item[0][1] : ''
  )[0]?.[1]?.cities;

  const { province } = values;
  const [district, setDistrict] = useState<any>([]);

  useEffect(() => {
    if (province) {
      setDistrict(listDistrict ? Object.values(listDistrict) : '');
    }
  }, [province]);

  // console.log(district);

  return (
    <div className="container contact px-0 mt-4">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="fs-5 fw-bold">Contact:</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <FieldSelect
            options={listProvince}
            label="Province"
            name="province"
          />
        </div>

        <div className="col-lg-6">
          <FieldSelect options={district} label="District" name="district" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-6">
          <FieldInput label="Address" name="address" type="text" />
        </div>
        <div className="col-lg-3">
          <FieldInput label="Email" name="email" type="email" />
        </div>
        <div className="col-lg-3">
          <FieldInput label="Mobile" name="mobile" type="text" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
