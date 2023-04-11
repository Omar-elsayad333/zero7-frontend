import Urls from 'constants/urls'
import { useParams } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'
import { getByIdHandler } from 'handlers/requestHandlers'

const useProduct = () => {

    const { id }: any = useParams();
    const [productData, setProductData] = useState<any>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useLayoutEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            setIsLoading(true)
            const res = await getByIdHandler(Urls.products, id)
            setProductData(res)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    const selectColor = (event: any) => {
        const colorBoxs = Array.from(document.getElementsByName('colorBox'))
        for(let box of colorBoxs) {
            box.classList.remove('colorActive')
        }
        event.target.classList.add('colorActive')
    }

    return (
        {
            data: {
                productData
            },
            states: {
                isLoading
            },
            actions: {
                selectColor
            }
        }
    );
}
 
export default useProduct;