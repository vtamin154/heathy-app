import React, { useEffect, useState } from 'react';
import { TValuesForm } from '../assets/type';
import { useNavigate, useParams } from 'react-router-dom';
import { addIdToItem } from '../service/generateId';
import FormField from '../components/form';

const FormRegister = () => {
  const localData = JSON.parse(localStorage.getItem('register-form') || '[]');
  const { idItem } = useParams();

  const [dataEdit, setDataEdit] = useState<TValuesForm>(
    localData.find((item: any) => item.id === idItem)
  );
  const navigate = useNavigate();

  const handleSubmit = (key: string, values: TValuesForm) => {
    const existItemIndex = localData.findIndex(
      (item: any) => item.id === idItem
    );
    // console.log(existItemIndex)
    // console.log(values)
    let newItem, newData;
    if (existItemIndex >= 0) {
      newItem = { ...values, id: idItem };
      newData = [
        ...localData.slice(0, existItemIndex),
        newItem,
        ...localData.slice(existItemIndex + 1),
      ];
    } 
    else {
      newItem = addIdToItem({...values}, localData);
      newData = [{ ...newItem }, ...localData];
      // console.log(newItem);
    }

    localStorage.setItem(key, JSON.stringify(newData));
    navigate('/table');
  };

  // console.log(idItem)
  const handleEditData = () => {
    if (idItem) {
      const editItem = localData.find((item: any) => item.id === idItem);
      if (editItem) setDataEdit(editItem);
    }
  };

  useEffect(() => {
    handleEditData();
  }, [idItem]);

  // console.log(dataEdit);
  return (
    <div className="form-register container">
      <div className="row">
        <h2 className="col-lg-12 text-success text-center mt-4">
          MEDICAL DECLARATION FORM FOR FOREIGN ENTRY
        </h2>
      </div>

      <div className="row">
        {/* {dataEdit? <FormField handleSubmit={handleSubmit}/> : <FormField handleSubmit={handleSubmit} dataEdit = {dataEdit}/>} */}
        <FormField dataEdit={dataEdit} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default FormRegister;
