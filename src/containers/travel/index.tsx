import { FieldArray, useFormikContext } from 'formik';
import React, { useState } from 'react';
import { TValuesForm } from '../../assets/type';

import TravelItem from './travelItem';

const Travel: React.FC = () => {
  const { values } = useFormikContext<TValuesForm>();
  // console.log(values.travel);
  return (
    <div className="container travel px-0 mt-4">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="fs-5 fw-bold">Travel:</h4>
        </div>

        <div className={`row`}>
          <FieldArray name="travel">
            {({ remove, push }) => {
              const onRemove = (index: number) => {
                if (Object.values(values.travel[index]).join('') !== '') {// kiểm tra xem trong mảng travel có phần tử nào chưa, nếu có, khi xóa sẽ hiển thị confirm để xác nhận xóa hay cancel, nếu không cứ thế xóa
                  const confirm: boolean = window.confirm(
                    'Do you want to remove?'
                  );
                  return confirm ? remove(index) : '';
                }
                return remove(index);
              };
              return (
                <div>
                  {values.travel.length === 0 ? (
                    <div className="col-lg-12 d-flex">
                      <h6 className={`me-4 mt-2 `}>
                        Do you travel in the last 14 days ?
                      </h6>
                      <button
                        type="button"
                        onClick={() =>
                          push({
                            departureDate: '',
                            immigrationDate: '',
                            departure: '',
                            destination: '',
                          })
                        }
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
                        remove={onRemove}
                        push={push}
                        index={index}
                      />
                    ))
                  )}
                </div>
              );
            }}
          </FieldArray>
        </div>
      </div>
    </div>
  );
};

export default Travel;
