import { callApi } from './api';

// Example: Fetch some data from backend
export async function getDashboardData() {
    try {
        const data = await callApi('/dashboard');  // replace with your backend route
        console.log('Dashboard data:', data);
        return data;
    } catch (err) {
        console.error('Error fetching dashboard:', err);
        return null;
    }
}

// Example: Send login data
export async function loginUser(email: string, password: string) {
    try {
        const result = await callApi('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        console.log('Login result:', result);
        return result;
    } catch (err) {
        console.error('Login error:', err);
        return null;
    }
}
