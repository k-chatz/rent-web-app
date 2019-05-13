
export interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
  pending_provider?: boolean;
  role: any;
  locked: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
