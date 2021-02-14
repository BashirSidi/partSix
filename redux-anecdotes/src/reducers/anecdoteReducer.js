import anecdotesService from '../services/anecdotes';

const anecReducer =  (state = [], action) => {
  switch (action.type) {
    case 'VOTE': {
      return action.data
    }
    
    case 'INIT_ANECS' : {
      return action.data
    }

    case 'ADD': {
      return [...state, action.data]
    }

    default:
      return state
  }
}

export const voteAnec = (id) => {
  return async dispatch => {
    await anecdotesService.updateAnec(id);
    const anecsdotes = await anecdotesService.getAll();
    dispatch({
      type: 'VOTE',
      data: anecsdotes
    })
  }
}

export const initializedAnecs = () => {
  return async dispatch => {
    const anecs = await anecdotesService.getAll();
    dispatch({
      type: 'INIT_ANECS',
      data: anecs
    })
  }
}

export const addAnecdote = (anecdote) => {
  return async dispatch => {
    const newlyAnec = await anecdotesService.createAnec(anecdote);
    dispatch({
      type: 'ADD',
      data: newlyAnec
    })
  }
}

export default anecReducer