import { useUser } from 'contexts/userContext'
import { useState, useLayoutEffect } from 'react'

const useShop = () => {
    
    const [data, setData] = useState({})
    const { userState, userDispatch } = useUser()

    useLayoutEffect(() => {
        userState.tokens.accessToken && getData()
    }, [])

    const getData = async () => {
        try {
            userDispatch({type: 'setLoading'})
            const res = ''
            setData(res)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            userDispatch({type: 'setLoading'})
        }
    }

    return (
        {
            data
        }
    );
}
 
export default useShop;