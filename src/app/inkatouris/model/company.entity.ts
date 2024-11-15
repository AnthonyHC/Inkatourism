export class Company {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor(company: {id?: string, name?: string, email?: string, password?: string}) {
    this.id = company.id || '';
    this.name = company.name || '';
    this.email = company.email || '';
    this.password = company.password || '';
  }
}
