import React from 'react';
import { AuthProvider } from 'context/auth';
import AppRouter from 'routers/AppRouter';

export default function HeroesApp() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
