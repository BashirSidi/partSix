import React from 'react'
import {useDispatch} from 'react-redux'
import {addAnecdote} from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
const dispatch =  useDispatch();

const add = async (event) => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = ''
    dispatch(addAnecdote(anecdote))
  }
    return (
    <div>
        <h2>create new</h2>
        <form onSubmit={add}>
            <div><input type='text' name='anecdote' /></div>
            <button type='submit'>create</button>
        </form>
    </div>
    )
}
export default AnecdoteForm
