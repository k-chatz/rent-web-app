import {Access} from './access';
import {User} from './user';
import {Profile} from './profile';

export interface Session {
  access: Access;
  user: User;
  profile: Profile;
}
