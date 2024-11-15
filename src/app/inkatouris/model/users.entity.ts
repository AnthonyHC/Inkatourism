import { UserType } from "./users";

export class User {
  id: number;
  fullname: string;
  email: string;
  password: string;
  type_user: UserType;

  constructor(user: { id?: number, fullname?: string, email?: string, password?: string, type_user?: UserType }) {
    this.id = user.id || 0;
    this.fullname = user.fullname || '';
    this.email = user.email || '';
    this.password = user.password || '';
    this.type_user = user.type_user || UserType.PERSON; // Default to PERSON
  }
}
