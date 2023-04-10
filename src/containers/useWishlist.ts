import Urls from 'constants/urls'
import { useState, useLayoutEffect } from 'react'
import { getByIdHandler } from 'handlers/requestHandlers'

const useWishlist = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [productsData, setProductsData] = useState<any[]>([])

    useLayoutEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        if(localStorage.getItem('wishlist')) {
            setIsLoading(true)
            const dataCollector = []
            const wishlist: any[] = JSON.parse(localStorage.getItem('wishlist')!)
            for(let wishId of wishlist) {
                try {
                    const productsData: any = await getByIdHandler(Urls.products, wishId)
                    dataCollector.push(productsData)
                }
                catch (err: any) {
                    console.log(err)
                }
            }
            setProductsData(dataCollector)
            setIsLoading(false)
        }
    }   

    const removeFromWishList = (_id: string) => {
        if(localStorage.getItem('wishlist')) {
            console.log('kljdsaf')
            const wishlist:any[] = JSON.parse(localStorage.getItem('wishlist')!)
            const index = wishlist.indexOf(_id)
            
            if(index > -1) {
                wishlist.splice(index, 1)
                localStorage.setItem('wishlist', JSON.stringify(wishlist))
                getData()
            }
        }
    }

    return (
        {
            data: {
                productsData
            },
            states: {
                isLoading
            },
            actions: {
                removeFromWishList
            }
        }
    );
}
 
export default useWishlist;