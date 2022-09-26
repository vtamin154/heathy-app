import countries from './countries.json';
import provinceDistrict from './vietnam-province-district.json';

const optionsObject = [
  'Expert',
  'Vietnamese',
  'International Student',
  'Other',
];

const gender = ['Male', 'Female', 'Other'];

const nationality = [...countries.map((country) => country.name)];

const provinces = Object.entries(provinceDistrict);

const symptoms = ['Fiber', 'Fever', 'Sore throat', 'Difficulty of breathing'];

const vaccines = ['None', 'Astra Zenecca', 'Pfizer', 'Moderna', 'Sinopharm'];

const itemPerPage = [
  {
    value:2,
    label:'2'
  },
  {
    value:4,
    label:'4'
  },
  {
    value: 6,
    label:'6'
  }
]

export { optionsObject, gender, nationality, provinces, symptoms, vaccines, itemPerPage };
