import React from 'react';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';

interface RouteProps {
  caseSensitive?: boolean;
  children?: React.ReactNode;
  element: React.FC;
  path: string;
}

export enum RouteNames {
  HOME = '/',
  LOGIN = '/login',
  REGISTER = '/registration',
  FILMS = '/films',
  FILM = '/film/:idFilm',
}

export const publicRoutes: RouteProps[] = [
  {path: RouteNames.LOGIN, element: LoginPage},
  {path: RouteNames.HOME, element: HomePage},
  {path: RouteNames.REGISTER, element: RegisterPage},
  {path: RouteNames.FILMS, element: HomePage},
  {path: RouteNames.FILM, element: HomePage},
];
export const privateRoutes: RouteProps[] = [
  {path: RouteNames.LOGIN, element: LoginPage},
  {path: RouteNames.HOME, element: HomePage},
  {path: RouteNames.REGISTER, element: RegisterPage},
  {path: RouteNames.FILMS, element: HomePage},
  {path: RouteNames.FILM, element: HomePage},
];
