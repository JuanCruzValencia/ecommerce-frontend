import { type } from "os";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  cart: Cart["_id"];
  role: ROLE;
  last_connection: Date;
}

export enum ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
  PREMIUM = "PREMIUM",
}

export interface Cart {
  _id: string;
  products: Products[];
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  code: string;
  price: number;
  status: boolean;
  stock: number;
  category: string;
  thumbnail: string[];
  owner: ROLE | User["_id"];
}

export interface Products {
  product: Product;
  quantity: number;
}

export interface CartContextProps {
  getCartList: () => Promise<Cart>;
  addToCart: (pid: Product["_id"]) => void;
  deleteItem: (pid: Product["_id"]) => void;
  purchaseCart: () => void;
}

export interface UserContextProps {
  getUsersList: () => Promise<User[]>;
  changeRole: (uid: User["_id"]) => void;
  deleteUser: (uid: User["_id"]) => void;
  deleteAllUsers: () => Promise<void>;
}

export type RestoreInputTypes = {
  email: User["email"];
};

export type ResetPasswordInputs = {
  password: User["password"];
};

export type RegisterInputsTypes = {
  first_name: User["firstName"];
  last_name: User["lastName"];
  age: User["age"];
  email: User["email"];
  password: User["password"];
};

export type LoginInputTypes = {
  email: User["email"];
  password: User["password"];
};

export interface Ticket {
  id: string;
  code: string;
  amount: number;
  purchaser: string;
  purchased_datetime: Date;
}
