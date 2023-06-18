export interface APIResponse {
  data: any[];
  message: string;
  status: number;
}
export interface IUser {
  v: number;
  _id: string;
  city: string;
  country: string;
  createdAt: string;
  email: string;
  name: string;
  occupation: string;
  password: string;
  phoneNumber: number;
  role: string;
  state: string;
  transactions: string[];
  updatedAt: string;
}
