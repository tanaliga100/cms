export interface APIResponse {
  counts: number;
  msg: string;
  data: any[];
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

export interface IQueryParams {
  page?: number | string;
  pageSize?: number | string;
  sort?: string | null;
  search?: string | null;
}

export interface ISales {
  _id: string;
  totalCustomers: number;
  yearlySalesTotal: number;
  yearlyTotalSoldUnuts: number;
  year: number;
  monthlyData: [
    month: string,
    totalSales: number,
    totalUnits: number,
    _id: string
  ];
  dailyData: [
    date: string,
    totalSales: number,
    totalUnits: number,
    _id: string
  ];
  salesByCategory: {
    shoes: number;
    clothing: number;
    accessories: number;
    misc: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Data {
  __v: number;
  _id: string;
  createdAt: string;
  totalCustomers: number;
  updatedAt: string;
  year: number;
  yearlyTotalSales: number;
  yearlyTotalSoldUnits: number;
  dailyData: DailyData[];
  monthlyData: MonthlyData[];
  salesByCategory: {
    accessories: number;
    clothing: number;
    misc: number;
    shoes: number;
  };
}

interface DailyData {
  _id: string;
  date: string;
  totalSales: number;
  totalUnits: number;
}

export interface MonthlyData {
  month: string;
  totalSales: number;
  totalUnits: number;
}

export interface TotalSalesLine {
  id?: string;
  color?: string;
  data?: { x: string; y: number }[];
}

export interface TotalUnitsLine {
  id?: string;
  color?: string;
  data?: { x: string; y: number }[];
}
