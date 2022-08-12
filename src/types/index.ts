export type Credentials = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  roles: UserRole[];
};

export type UserRole = {
  id: number;
  value: string;
  description: string;
};
