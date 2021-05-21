
import {GET_USERS, USERS_ERROR} from '../types'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD`)
        console.log(res)
        dispatch( {
            type: GET_USERS,
            payload: res.data
           
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}