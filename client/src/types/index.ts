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

export interface IProduct {
  __v: number;
  _id: string;
  category: string;
  createdAt: string;
  description: string;
  name: string;
  price: number;
  rating: number;
  supply: number;
  updatedAt: string;
  stats: IStats[];
}
export interface IStats {
  __v: number;
  _id: string;
  dailyData: { _id: string; date: string; totalUnits: number }[];
  monthlyData: { _id: string; month: string; totalUnits: number }[];
  createdAt: string;
  productId: string;
  updatedAt: string;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
}
export interface IProducts {
  stats?: IStats[];
  ctx?: string;
  product?: IProduct;
  key?: number | string;
}
``;
