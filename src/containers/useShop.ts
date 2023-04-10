import Urls from "constants/urls";
import { useEffect, useState } from "react";
import { getHandler } from "handlers/requestHandlers";

const useShop = () => {
    const [productsData, setProductsData] = useState<any[]>([])
    const [genders, setGenders] = useState<any[]>([])
    const [categorys, setCategorys] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedGender, setSelectedGender] = useState<any>('')

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const productsData: any = await getHandler(Urls.products)
                const gendersData: any = await getHandler(Urls.genders)
                const categorysData: any = await getHandler(Urls.categorys)
                setProductsData(productsData)
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

    // Handle selected gender filter
    const handleSelectedGender = (event: any) => {
        for (let gender of genders) {
            if (gender.name === event.target.value) {
                setSelectedGender({
                    id: gender._id,
                    name:  gender.name
                })
            }
        }
    }

    return (
        {
            data: {
                productsData,
                genders,
                categorys
            },
            states: {
                selectedGender,
                error,
                isLoading
            },
            actions: {
                handleSelectedGender
            }
        }
    );
}
 
export default useShop;