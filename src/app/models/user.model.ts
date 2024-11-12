import { Address } from "./address.model";

export interface User {
  username: string;
  email: string;
  password: string;
  address: Address;
}
