export interface ITable {
  ati: number;
  id: string;
  comment: string;
  data: number;
  nameFirm: string;
  number: number;
  phone: number;
}

export interface IInfoTable {
  propsData: {
    ati: number;
    id: string;
    comment: string;
    data: number;
    nameFirm: string;
    number: number;
    phone: number;
  }[];
}
