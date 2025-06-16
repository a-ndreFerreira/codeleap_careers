import { useState } from "react";
import api from "../services/api";

export function usePost() {
    const [error, setError] = useState(null);
    const postItem = async (payload) => {
        if (!payload) {
            setError('Invalid credentials.');
            return false;
        }
        try {
            setError('');
            const response = await api.post(`careers/`, payload);
            if (response && [200, 201].includes(response.status)) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            setError(error?.message || 'Error post item.');
            return false;
        }
    }
    return { postItem, error };
}