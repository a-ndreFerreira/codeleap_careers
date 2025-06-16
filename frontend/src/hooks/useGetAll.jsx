import { useEffect, useState } from "react";
import api from '../services/api'

export function useGetAll(deps = []) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getAll = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await api.get(`careers/`)
                const data = response?.data;
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getAll()
    }, deps)
    return { data, loading, error }
}