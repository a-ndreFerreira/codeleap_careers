import api from "../services/api";
import { useState } from "react";

export function useUpdate() {
    const [error, setError] = useState(null);

    const updateItem = async (id, payload) => {
        if (!id || !payload) {
            setError('Invalid credentials.');
            return false;
        }
        try {
            setError('');
            const response = await api.put(`careers/${id}/`, payload);
            if (response && [200, 201].includes(response.status)) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            setError(error?.message || 'Error update item.');
            return false;
        }
    }
    return { updateItem, error }
}