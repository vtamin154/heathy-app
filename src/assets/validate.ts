import * as Yup from 'yup';

const validation = Yup.object({
  fullname: Yup.string().min(1).required('Name is required'),
  object: Yup.string().required('Object is required'),
  gender: Yup.string().required('Gender is required'),
  birth:Yup.string().required('Date of birth is required'),
  nationality: Yup.string().required('Nationality is required'),
  passport: Yup.string().required('Nation ID is required'),

  travel: Yup.array().of(
    Yup.object().shape({
      departureDate: Yup.string().required('Departure Date'),
      immigrationDate: Yup.string().required('Immigration Date'),
      departure: Yup.string().required('Departure'),
      destination: Yup.string().required('Destination'),
    })
  ),

  province: Yup.string().required('Contact province is required'),
  district: Yup.string().required('Contact district is required'),
  address: Yup.string().min(1).required('Contact address is required'),
  email: Yup.string().email('Email is invalid').required('Contact email is required'),
  mobile: Yup.string()
    .matches(/^[0-9]+$/,'Mobile is invalid')
    .required('Contact mobile is required'),
});

export { validation };
