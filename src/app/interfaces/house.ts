import {Status} from "../enums/status.enum";

export interface House {
  id: number,
  price: number,
  area: string,
  status: Status,
  address: Address
}

export interface Address {
  street: string,
  number: number,
  city: string
}
