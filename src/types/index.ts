export type Credentials = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  roles: UserRole[];
  banned: boolean;
  banReason: null | string;
};

export type UserRole = {
  id: number;
  value: string;
  description: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};
