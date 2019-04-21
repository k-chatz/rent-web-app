import {Role} from './role';

export interface User {
  id: number;
  username: string;
  name: string;
  surname: string;
  photoUrl: string;
  password: string;
  role: Role;
  birthday: string;
  locked: boolean;
  email: string;
}
