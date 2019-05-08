import {Role} from './role';
import {Profile} from './profile';

export interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
  pending_provider?: boolean;
  role: Role;
  locked: boolean;
  profile: Profile;
  createdAt?: Date;
  updateAt?: Date;
}
