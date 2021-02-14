import React, {useRef, useEffect} from 'react'
import AnecdoteForm from '../src/components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Togglable from './components/Togglable'
import Notification from './components/Notification'
import Filter from './components/Filter'
import {initializedAnecs} from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const anecFormRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializedAnecs())
  },[dispatch])

  const createForm = () => (
    <Togglable btnCancel="cancel" buttonLabel="Add anecdote" ref={anecFormRef}>
    <AnecdoteForm  />
    </Togglable>
  )
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />  
      <Filter />
      {createForm()}
      <AnecdoteList/>
    </div>
  )
}

export default App