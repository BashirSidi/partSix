import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react' // need to import "fireEvent" to handle click 
import Blog from './Blog'

test('render contents', () => {
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'Bashir Sidi',
        url: 'www.google.com',
        likes: 7
    }

    const component = render(
        <Blog blog={blog} />
    )

    expect(component.container).toHaveTextContent(
        'Bashir Sidi'
    )

    expect(component.container).toHaveTextContent(
        'Component testing is done with react-testing-library'
    )
    
})