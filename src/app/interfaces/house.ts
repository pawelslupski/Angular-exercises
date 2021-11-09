import {Status} from "../enums/status.enum";

export interface House {
  id: number,
  price: number,
  area: string,
  imageUrl: string,
  status: Status,
  address: Address
}

export interface Address {
  street: string,
  number: number,
  city: string
}
