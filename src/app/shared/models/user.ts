import {Role} from './role';
import {Profile} from './profile';

export interface User {
  id: number;
  username: string;
  password: string;
  role: Role;
  locked: boolean;
  email: string;
  profile: Profile;
}
