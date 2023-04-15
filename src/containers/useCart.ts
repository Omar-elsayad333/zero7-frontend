import { useState, useEffect } from 'react'

const useCart = () => {

    const [isLoading] = useState<boolean>(false)
    const [productsData, setProductsData] = useState<any[]>([])

    useEffect(() => {
        if(localStorage.getItem('zero7_cartProducts')) {
            setProductsData(JSON.parse(localStorage.getItem('zero7_cartProducts')!))
        }
    }, [])

    return (
        {
            data: {
                productsData
            },
            states: {
                isLoading
            },
            actions: {

            }
        }
    );
}
 
export default useCart;