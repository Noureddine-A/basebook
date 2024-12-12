export class Person {
  id: number;
  firstName: string;
  infix?: string;
  lastName: string;
  departmentId: number;
  image: string;
  quote: string;
  phoneNumber: string;

  constructor(
    id: number,
    firstName: string,
    infix: string,
    lastName: string,
    departmentId: number,
    image: string,
    quote: string,
    phoneNumber: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.infix = infix;
    this.lastName = lastName;
    this.departmentId = departmentId;
    this.image = image;
    this.quote = quote;
    this.phoneNumber = phoneNumber;
  }
}
