import { render } from '@testing-library/react';
import { FieldArray, useFormikContext } from 'formik';
import React, { useState } from 'react';
import { nationality } from '../../assets/data';
import { TValuesForm } from '../../assets/type';
import FieldInput from '../../components/input/inputText';
import FieldSelect from '../../components/selection';
import TravelItem from './travelItem';

const Travel = () => {

  const { values } = useFormikContext<TValuesForm>();
  // console.log(values);
  return (
    <div className="container travel px-0 mt-4">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="fs-5 fw-bold">Travel:</h4>
        </div>

        <div className={`row`}>
          <FieldArray name="travel">
            {({ remove, push }) => (
              <div>
                {values.travel.length === 0 ? (
                  <div className="col-lg-12 d-flex">
                    <h6 className={`me-4 mt-2 `}>
                      Do you travel in the last 14 days ?
                    </h6>
                    <button
                      type="button"
                      onClick={() => push({departureDate: '', immigrationDate: '', departure: '', destination: ''})}
                      className={`btn btn-warning `}
                    >
                      Add more
                    </button>
                  </div>
                ) : (
                  values.travel.map((val: any, index: number) => (
                    <TravelItem
                      data={val}
                      key={index}
                      remove={remove}
                      push={push}
                      index={index}
                    />
                  ))
                )}
              </div>
            )}
          </FieldArray>
        </div>
      </div>
    </div>
  );
};

export default Travel;
