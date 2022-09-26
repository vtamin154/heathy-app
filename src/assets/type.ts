export type TValuesForm = {
  id:string
  fullname: string;
  object: string;
  birth: string;
  gender: string;
  nationality: string;
  passport: string;

  travel: [
    // {
    //   departureDate: string;
    //   immigrationDate: string;
    //   departure: string;
    //   destination: string;
    // }
  ];

  province: string;
  district: string;
  address: string;
  email: string;
  mobile: string;

  symptoms: [];
  vaccines: string;
};

export type TItemPerPage = {
  value:number;
  label:string;
}

export type TValuesList = {
  itemsPerPage: string;
}