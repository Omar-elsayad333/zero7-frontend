import Urls from "constants/urls";
import { colors } from "styles/colors";
import { getHandler } from "handlers/requestHandlers";
import { useEffect, useLayoutEffect, useState } from "react";

const useShop = () => {
    const [originalData, setOriginalData] = useState<any[]>([])
    const [productsData, setProductsData] = useState<any[]>([])
    const [genders, setGenders] = useState<any[]>([])
    const [categorys, setCategorys] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedGender, setSelectedGender] = useState<any>('')
    const [selectedCategory, setSelectedCategory] = useState<any>('')

    useLayoutEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const productsData: any = await getHandler(Urls.products)
                const gendersData: any = await getHandler(Urls.genders)
                const categorysData: any = await getHandler(Urls.categorys)
                setProductsData(productsData)
                setOriginalData(productsData)
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

    useLayoutEffect(() => {
        const checkWishlist = () => {
            if(localStorage.getItem('wishlist')) {
                const icons = Array.from(document.getElementsByClassName("wishlistIcons")) as HTMLElement[]
                const wishlist: any = JSON.parse(localStorage.getItem('wishlist')!)
                for(let icon of icons) {
                    for(let wish of wishlist) {
                        if(icon.getAttribute('data-id') === wish) {
                            icon.style.backgroundColor = colors.primary.main
                        }
                    }
                }
            }
        }

        checkWishlist()
    }, [productsData])

    useEffect(() => {
        if(selectedGender !== '') {
            if(selectedCategory !== '') {
                setProductsData(
                    originalData.filter((item: any) => item.genderId === selectedGender._id && item.categoryId === selectedCategory._id)
                )
            } else {
                setProductsData(
                    originalData.filter((item: any) => item.genderId === selectedGender._id)
                )
            }
        }
        if(selectedCategory !== '') {
            if(selectedGender !== '') {
                setProductsData(
                    originalData.filter((item: any) => item.categoryId === selectedCategory._id && item.genderId === selectedGender._id)
                )
            } else {
                setProductsData(
                    originalData.filter((item: any) => item.categoryId === selectedCategory._id)
                )
            }
        }
    }, [selectedGender, selectedCategory, originalData])

    // Handle selected gender filter
    const handleSelectedGender = (event: any) => {
        for (let gender of genders) {
            if (gender.name === event.target.value) {
                setSelectedGender(gender)
            }
        }
    }

    // Handle selected category filter
    const handleSelectedCategory = (event: any) => {
        for (let category of categorys) {
            if (category.name === event.target.value) {
                setSelectedCategory(category)
            }
        }
    }

    // Clear all filters handler
    const clearFilters = () => {
        setSelectedGender('')
        setSelectedCategory('')
        setProductsData(originalData)
    }

    // Handle add and remove from wishlist
    const addToWishlist = (event: any, _id: string) => {
        if(localStorage.getItem('wishlist')) {
            const wishlist = JSON.parse(localStorage.getItem('wishlist')!)
            if(!wishlist.find((item: string) => item === _id)) {   
                event.target.style.backgroundColor = colors.primary.main
                wishlist.push(_id)
                localStorage.setItem('wishlist', JSON.stringify(wishlist))
            }else {
                event.target.style.backgroundColor = 'transparent'
                const index = wishlist.indexOf(_id);
                if (index > -1) {
                    wishlist.splice(index, 1);
                    console.log(wishlist)
                }
                localStorage.setItem('wishlist', JSON.stringify(wishlist))
            }
        }else {
            const wishlist = []
            wishlist.push(_id)
            localStorage.setItem('wishlist', JSON.stringify(wishlist))
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
                selectedCategory,
                error,
                isLoading
            },
            actions: {
                handleSelectedGender,
                handleSelectedCategory,
                addToWishlist,
                clearFilters
            }
        }
    );
}
 
export default useShop;