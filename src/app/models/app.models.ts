export class Department {
  constructor(
    public DeptNo: number,
    public DeptName: string
  ){}
}

export class Employee {
  constructor(
    public EmpNo: number,
    public EmpName: string,
    public DeptNo: number
  ){}
}

export class Customer {
  id: string;
  name: string;
  city: string;
  email: string;
  contactNumber: string;
}

export class Order {
  id: string;
  name: string;
  customerId: string;
  quantity: number;
  amount: number;
}
