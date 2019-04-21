import {Access} from './access';
import {User} from './user';

export interface Session {
  access: Access;
  user: User;
}
