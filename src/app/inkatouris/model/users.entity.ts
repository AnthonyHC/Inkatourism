export class User {
  id: string;
  email: string;
  password: string;
  fullName: string;

  constructor(user: { id?: string, email?: string, password?: string, fullName?: string }) {
    this.id = user.id || '';
    this.email = user.email || '';
    this.password = user.password || '';
    this.fullName = user.fullName || '';
  }
}
