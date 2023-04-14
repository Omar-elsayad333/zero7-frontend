import Urls from 'constants/urls'
import { colors } from 'styles/colors'
import { useParams } from 'react-router-dom'
import { useLayoutEffect, useState, useEffect } from 'react'
import { getByIdHandler, getHandler } from 'handlers/requestHandlers'

const useProduct = () => {

    const { id }: any = useParams();
    const [productData, setProductData] = useState<any>({})
    const [sideProducts, setSideProducts] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [sizes, setSizes] = useState<any[]>([])
    const [quantity, setQuantity] = useState<number>(0)
    const [selectedImages, setSelectedImages] = useState<string[]>([])
    const [selectedColor, setSelectedColor] = useState<string>('')
    const [selectedSize, setSelectedSize] = useState<string>('')
    const [selectedQuantity, setSelectedQuantity] = useState<number>(0)
    const [error, setError] = useState<string>('')

    useLayoutEffect(() => {
        getData()
    }, [])

    // Update sizes and images upon the selected color
    useEffect(() => {
        if(productData.colors) {
            // Update sizes
            for(let color of productData.colors) {
                if(color.colorId._id === selectedColor) {
                    setSizes(color.sizes)
                }
            }

            // Update images
            for(let color of productData.colors) {
                if(color.colorId._id === selectedColor) {
                    setSelectedImages([
                        color.images[0],
                        color.images[1]
                    ])
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
            const SideProductData = await getHandler(Urls.products)
            setProductData(res)
            setSideProducts(SideProductData.filter((item: any) => item.categoryId === res.categoryId && item._id !== res._id))
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
        console.log()
        const colorBoxs = Array.from(document.getElementsByClassName('colorBox'))
        for (let box of colorBoxs) {
            box.classList.remove('boxActive')
        }
        event.target.classList.add('boxActive')
        setSelectedColor(event.target.getAttribute('data-id'))
    }

    const handleSelectSize = (event: any) => {
        const sizeBoxs = Array.from(document.getElementsByClassName('sizeBox'))
        for (let box of sizeBoxs) {
            box.classList.remove('boxActive')
        }
        event.currentTarget.classList.add('boxActive')
        setSelectedSize(event.target.getAttribute('data-id'))
    }

    const handleSelectQuantity = (event: any) => {
        setSelectedQuantity(event.target.value)
        setError('')
    }

    // Handle add and remove from wishlist
    const addToWishlist = (event: any, _id: string) => {
        if(localStorage.getItem('zero7_wishlist')) {
            const wishlist = JSON.parse(localStorage.getItem('zero7_wishlist')!)
            if(!wishlist.find((item: string) => item === _id)) {   
                event.target.style.backgroundColor = colors.primary.main
                wishlist.push(_id)
                localStorage.setItem('zero7_wishlist', JSON.stringify(wishlist))
            }else {
                event.target.style.backgroundColor = 'transparent'
                const index = wishlist.indexOf(_id);
                if (index > -1) {
                    wishlist.splice(index, 1);
                    console.log(wishlist)
                }
                localStorage.setItem('zero7_wishlist', JSON.stringify(wishlist))
            }
        }else {
            const wishlist = []
            wishlist.push(_id)
            localStorage.setItem('zero7_wishlist', JSON.stringify(wishlist))
        }
    }

    // Validate data before store it to local storage
    const validator = () => {
        let state = true

        if(selectedQuantity === 0) {
            state = false
            setError('You must select quantity')
        }

        return state
    }

    // Add data to cart in local storage
    const addToCart = () => {
        if(validator()) {
            const data = {
                _id: productData._id,
                color: selectedColor,
                sizes: selectedSize,
                quantity: quantity
            }

            if(localStorage.getItem('zero7_cartProducts')) {
                const cartProducts = JSON.parse(localStorage.getItem('zero7_cartProducts')!)
                if(!cartProducts.find((item: any) => item._id === productData._id)) {   
                    cartProducts.push(data)
                    localStorage.setItem('zero7_cartProducts', JSON.stringify(cartProducts))
                } else {
                    setError('Already added to cart')
                }
            } else {
                const cartProducts = []
                cartProducts.push(data)
                localStorage.setItem('zero7_cartProducts', JSON.stringify(cartProducts))
            }
        }
    }

    return (
        {
            data: {
                productData,
                sizes,
                quantity,
                sideProducts
            },
            states: {
                isLoading,
                selectedColor,
                selectedImages,
                selectedSize,
                selectedQuantity,
                error
            },
            actions: {
                handleSelectColor,
                handleSelectSize,
                handleSelectQuantity,
                addToWishlist,
                addToCart
            }
        }
    );
}

export default useProduct;