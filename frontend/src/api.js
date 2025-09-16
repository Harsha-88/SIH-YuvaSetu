// api.js

// Base URL of your backend
export const BACKEND_URL = 'https://sih-yuvasetu.onrender.com';

// Function to call your backend API
export async function callApi(endpoint, options = {}) {
    try {
        const response = await fetch(`${BACKEND_URL}${endpoint}`, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }
}
