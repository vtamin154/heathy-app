import React from 'react';
import FieldInput from '../../../components/input/inputText';
import FieldSelect from '../../../components/selection';
import { nationality } from '../../../assets/data';

interface PropsTravel {
  data: any;
  remove: (index: number) => void;
  push: (val: any) => void;
  index: number;
}

const TravelItem: React.FC<PropsTravel> = ({ data, remove, push, index }) => {
  // console.log(data);
  return (
    <div className="container travel-item px-0">
      <div className="row mb-4">
        <div className="col-lg-12">
          <h6 className="fw-bold text-primary">Travel {index + 1}</h6>
        </div>
        <div className="col-lg-6">
          <FieldInput
            type="date"
            label="Departure Date"
            name={`travel.${index}.departureDate`}
          />
        </div>

        <div className="col-lg-6">
          <FieldInput
            type="date"
            label="Immigration Date"
            name={`travel.${index}.immigrationDate`}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-6">
          <FieldSelect
            label="Departure"
            name={`travel.${index}.departure`}
            options={nationality}
          />
        </div>
        <div className="col-lg-6">
          <FieldSelect
            label="Destination"
            name={`travel.${index}.destination`}
            options={nationality}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-12">
          <button
          type='button'
            className="btn btn-warning"
            onClick={() =>
              push({
                departureDate: '',
                immigrationDate: '',
                departure: '',
                destination: '',
              })
            }
          >
            Add more
          </button>
          <button type='button'  className="btn btn-danger mx-3" onClick={() => remove(index)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelItem;
