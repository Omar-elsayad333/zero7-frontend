import Urls from "constants/urls";
import { useEffect, useState } from "react";
import { getHandler } from "handlers/requestHandlers";

const useShop = () => {
    const [data, setData] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const res: any = await getHandler(Urls.Products)
                setData(res)
            }
            catch (err: any) {
                console.log(err)
                setError(err)
            }
            finally {
                setIsLoading(false)
            }
        }
        
        getData()
    }, [])

    return (
        {
            data,
            error,
            isLoading
        }
    );
}
 
export default useShop;