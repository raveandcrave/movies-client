import React from 'react';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';

interface RouteProps {
  caseSensitive?: boolean;
  children?: React.ReactNode;
  element: any;
  path: string;
}

export enum RouteNames {
  LOGIN = '/login',
  HOME = '/',
}

export const publicRoutes: RouteProps[] = [
  {path: RouteNames.LOGIN, element: LoginPage},
  {path: RouteNames.HOME, element: HomePage},
];
export const privateRoutes: RouteProps[] = [
  {path: RouteNames.LOGIN, element: LoginPage},
  {path: RouteNames.HOME, element: HomePage},
];
