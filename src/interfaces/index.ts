export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IUserCreate {
  name: string;
  email: string;
}

export interface ISignup {
  name: string;
  email: string;
  password: string;
}

export interface INewUser {
  user: IUser;
  token: string;
}
