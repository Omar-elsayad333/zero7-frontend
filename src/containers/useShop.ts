import Urls from "constants/urls";
import { useEffect, useState } from "react";
import { getHandler } from "handlers/requestHandlers";

const useShop = () => {
    const [data, setData] = useState<any[]>([])
    const [genders, setGenders] = useState<any[]>([])
    const [categorys, setCategorys] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const productsData: any = await getHandler(Urls.products)
                const gendersData: any = await getHandler(Urls.genders)
                const categorysData: any = await getHandler(Urls.categorys)
                setData(productsData)
                setGenders(gendersData)
                setCategorys(categorysData)
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
            genders,
            categorys,
            error,
            isLoading
        }
    );
}
 
export default useShop;