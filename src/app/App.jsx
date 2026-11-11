import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../features/auth/AuthProvider.jsx';
import AppRoutes from './AppRoutes.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
