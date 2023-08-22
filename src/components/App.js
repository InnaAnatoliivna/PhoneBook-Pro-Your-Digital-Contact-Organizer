import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('pages/Home/Home'));
const SignUpPage = lazy(() => import('pages/SignUp/SignUp'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));



export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RestrictedRoute component={<SignUpPage />} redirectTo='/contacts' />} />
          <Route
            path="login"
            element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
          <Route path="contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo='/login' />} />
        </Route>
      </Routes>
    )
  );
}
