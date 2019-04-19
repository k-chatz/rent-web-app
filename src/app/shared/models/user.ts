export interface User {
  id: number;
  username: string;
  photoUrl: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
}
