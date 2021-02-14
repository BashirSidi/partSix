const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'FILTER':
           return action.data
        default:
            return state
    }
}

export const filterAnec = (data) => { 
    return {
        type: 'FILTER',
        data: data
    }
} 

export default filterReducer