import React from 'react'
import {useDispatch} from 'react-redux'
import {filterAnec} from '../reducers/filterReducer';

const Filter = () => {
    const dispatch = useDispatch()


    const handleChange = (event) => {
        event.preventDefault();
        const filterValue = event.target.value
        dispatch(filterAnec(filterValue));
    }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter