import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import FilmPage from '../pages/FilmPage';

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
  FILM = '/film/:filmId',
}

export const publicRoutes: RouteProps[] = [
  {path: RouteNames.LOGIN, element: LoginPage},
  {path: RouteNames.HOME, element: HomePage},
  {path: RouteNames.REGISTER, element: RegisterPage},
  {path: RouteNames.FILMS, element: HomePage},
  {path: RouteNames.FILM, element: FilmPage},
];
export const privateRoutes: RouteProps[] = [
  {path: RouteNames.LOGIN, element: LoginPage},
  {path: RouteNames.HOME, element: HomePage},
  {path: RouteNames.REGISTER, element: RegisterPage},
  {path: RouteNames.FILMS, element: HomePage},
  {path: RouteNames.FILM, element: FilmPage},
];
