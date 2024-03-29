import React from 'react';

import { AuthProvider } from '../hooks/auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
