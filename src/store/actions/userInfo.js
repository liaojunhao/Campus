import * as types from '../action-types/userInfo';
let updateCity = city => ({
    type:types.UPDATE_CITY,
    city
})
let loginUser = username => ({
    type:types.LOGIN,
    username
})

export default  {updateCity,loginUser}