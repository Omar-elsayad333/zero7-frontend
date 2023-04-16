import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const useCart = () => {

    const navigate = useNavigate();
    const [productsData, setProductsData] = useState<any[]>([])
    const [productsSubtotal, setProductSubtotal] = useState<number>(0)
    const [productsTotal, setProductTotal] = useState<number>(0)

    useEffect(() => {
        if(localStorage.getItem('zero7_cartProducts')) {
            setProductsData(JSON.parse(localStorage.getItem('zero7_cartProducts')!))
        }
    }, [])

    useEffect(() => {
        setProductSubtotal(0)
        setProductTotal(0)
        let total: number = 0
        for(let item of productsData) {
            total += parseInt(item.price) * parseInt(item.quantity)
        }
        setProductSubtotal(total)
        setProductTotal(total + 60)
    }, [productsData])

    const checkout = () => {
        localStorage.removeItem('zero7_cartProducts')
        navigate(0);
    }

    return (
        {
            data: {
                productsData
            },
            states: {
                productsSubtotal,
                productsTotal
            },
            actions: {
                checkout
            }
        }
    );
}
 
export default useCart;