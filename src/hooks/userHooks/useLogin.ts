import axiosInstance from "config/axios";
import { useState, useEffect } from "react";

const useLogin = (url: string, data: any) => {
    const [response, setResponse] = useState<any>(null)
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await axiosInstance.post(url, data)
                setResponse(res)
            }
            catch(err: any) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [url, data]);

    return { response, error, loading };
};

export default useLogin;