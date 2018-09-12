export interface Order {
  id?: number;
  dishIds: number[];
  amountDish: number[];
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  street: string;
  flat: string;
  floor: string;
  price: string;
  status: string;
}
