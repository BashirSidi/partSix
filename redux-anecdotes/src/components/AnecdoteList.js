import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import{voteAnec} from '../reducers/anecdoteReducer'
import {addNotification} from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

const Anecdotes = () => {
    const dispatch = useDispatch()
    let anecdotes = useSelector(state => state.anecdotes)
    let filter = useSelector(state => state.filter);
    let filteredAnec = anecdotes.filter(anec => 
        anec.content.includes(filter)
    )

    const sortedAnecdotes = (anecdotes) => {
        return anecdotes.sort((a,b) => (b.votes) - (a.votes))
    } 
    const handleVote = (id, anec) => {
        dispatch(addNotification(`You voted '${anec}'`, 2000))
        dispatch(voteAnec(id))
    }

    return (
        <div>
            {
                filter === '' ?
                sortedAnecdotes(anecdotes).map(anec =>
                    <Anecdote
                        key={anec.id}
                        anecdote={anec}
                        handleVote={() => handleVote(anec.id, anec.content)}
                    />
                ) 
                :
                sortedAnecdotes(filteredAnec).map(anec =>
                    <Anecdote
                        key={anec.id}
                        anecdote={anec}
                        handleVote={() => handleVote(anec.id, anec.content)}
                    />
                )
            }
        </div>    
    )
}

export default Anecdotes


