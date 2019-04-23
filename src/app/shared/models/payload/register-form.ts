interface PasswordGroup {
  password: string;
  confirmPassword: string;
}

export interface RegisterForm {
  name: string;
  surname: string;
  username: string;
  email: string;
  passwordGroup: PasswordGroup;
  remember: boolean;
  birthday: string;
}
