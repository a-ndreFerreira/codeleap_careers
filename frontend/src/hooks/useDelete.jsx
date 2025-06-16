import { useState } from "react";
import api from '../services/api'

export function useDelete() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteItem = async (id) => {
        if (!id) {
            setError('Not credentials.');
            return false;
        }
        try {
            setLoading(true);
            setError(null);
            const response = await api.delete(`careers/${id}/`);
            if (response && [204, 202, 200].includes(response.status)) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            setError(error.message);
            return false;
        } finally {
            setLoading(false);
        }
    }
    return { deleteItem, loading, error };
}