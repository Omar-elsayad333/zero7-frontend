import Urls from 'constants/urls'
import { useParams } from 'react-router-dom'
import { getByIdHandler } from 'handlers/requestHandlers'
import { useLayoutEffect, useState, useEffect } from 'react'

const useProduct = () => {

    const { id }: any = useParams();
    const [productData, setProductData] = useState<any>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [sizes, setSizes] = useState<any[]>([])
    const [quantity, setQuantity] = useState<number>(0)
    const [selectedColor, setSelectedColor] = useState<string>('')
    const [selectedSize, setSelectedSize] = useState<string>('')
    const [selectedQuantity, setSelectedQuantity] = useState<string>('')

    useLayoutEffect(() => {
        getData()
    }, [])

    // Update sizes upon the selected color
    useEffect(() => {
        if(productData.colors) {
            for(let color of productData.colors) {
                if(color.colorId._id === selectedColor) {
                    setSizes(color.sizes)
                }
            }
        }
    }, [selectedColor, productData])

    // Update quantity upon the selected size
    useEffect(() => {
        if(productData.colors) {
            for(let color of productData.colors) {
                if(color.colorId._id === selectedColor) {
                    for(let size of sizes) {
                        if(size.sizeId._id === selectedSize) {
                            setQuantity(size.quantity)
                            console.log(true)
                        }
                    }
                }
            }
        }
    }, [sizes, selectedColor, selectedSize, productData])

    const getData = async () => {
        try {
            setIsLoading(true)
            const res = await getByIdHandler(Urls.products, id)
            setProductData(res)
            setSelectedColor(res.colors[0].colorId._id)
            setSelectedSize(res.colors[0].sizes[0].sizeId._id)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    const handleSelectColor = (event: any) => {
        const colorBoxs = Array.from(document.getElementsByName('colorBox'))
        for (let box of colorBoxs) {
            box.classList.remove('boxActive')
        }
        event.target.classList.add('boxActive')
        setSelectedColor(event.getAttribute('data-id'))
    }

    const handleSelectSize = (event: any) => {
        const sizeBoxs = Array.from(document.getElementsByName('sizeBox'))
        for (let box of sizeBoxs) {
            box.classList.remove('boxActive')
        }
        event.target.classList.add('boxActive')
        setSelectedSize(event.getAttribute('data-id'))
    }

    const handleSelectQuantity = (event: any) => {
        setSelectedQuantity(event.target.value)
    }

    return (
        {
            data: {
                productData,
                sizes,
                quantity
            },
            states: {
                isLoading,
                selectedColor,
                selectedSize,
                selectedQuantity,
            },
            actions: {
                handleSelectColor,
                handleSelectSize,
                handleSelectQuantity
            }
        }
    );
}

export default useProduct;