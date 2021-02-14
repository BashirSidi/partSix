const initialNotification = null
const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return action.data
        case 'REMOVE': 
            return action.data
        default:
            return state
    }
}

export const addNotification = (notification, timeout) => {
    return async dispatch => {
        dispatch({
          type: 'ADD_NOTIFICATION',
          data: notification
        })
        setTimeout(() => {
            dispatch({
                type: 'REMOVE',
                data: null
            })
        }, timeout)
      }
}

export default notificationReducer