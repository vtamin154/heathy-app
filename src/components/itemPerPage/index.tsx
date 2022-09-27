import React, { useEffect } from 'react';
import { TItemPerPage, TValuesList } from '../../assets/type';
import { Field, useFormikContext } from 'formik';

interface PropsItemPerPage {
  options: TItemPerPage[];
  handleChangeOption: (option: number) => void;
}

const ItemPerPage: React.FC<PropsItemPerPage> = ({
  options,
  handleChangeOption,
}) => {
  const { values } = useFormikContext<TValuesList>();// lấy toàn bộ dữ liệu nhập ở form (fullname, object, gender,...)
  // console.log(values);

  useEffect(() => {
    handleChangeOption(Number(values.itemsPerPage));
  }, [values.itemsPerPage]);

  return (
    <div className="d-flex align-items-center">
      <Field
        as="select"
        className="form-select mx-2"
        style={{ width: '5rem' }}
        name="itemsPerPage"
        value={values.itemsPerPage}
      >
        {options.map((option: TItemPerPage, index: number) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </Field>
      <label>Items/Page</label>
    </div>
  );
};

export default ItemPerPage;
