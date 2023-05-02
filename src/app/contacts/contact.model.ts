// creat a class called Contact with the following properties and constructor
export class Contact {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone: string,
    public imageUrl: string,
    public group: Contact[]
  ) {}
}
