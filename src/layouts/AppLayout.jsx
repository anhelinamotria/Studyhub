import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';

export default function AppLayout() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
