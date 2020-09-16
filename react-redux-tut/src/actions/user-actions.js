export const UPDATE_USER = "user:updateUser"

export const FETCH_SUCCESS = "user:fetchSuccess"

export function updateUser(newUser){
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function apiRequest(num){
    return dispatch => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>dispatch(updateUser(data[num].name)))
    }
}