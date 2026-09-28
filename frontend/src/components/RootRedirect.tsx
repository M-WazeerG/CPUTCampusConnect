import { Navigate } from 'react-router-dom';

export default function RootRedirect() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return <Navigate to={token ? '/dashboard' : '/login'} replace />;
}