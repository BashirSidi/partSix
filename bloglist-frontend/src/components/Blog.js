import React, { useState } from 'react';
const Blog = ({ blog, handleLikeButton, handleDeleteButton }) => {
	const [ visible, setVisible ] = useState(false);
	const hideWhenVisible = { display: visible ? 'none' : '' };
	const showWhenVisible = { display: visible ? '' : 'none' };

	

	const toggleVisible = () => {
		setVisible(!visible);
	};

	const blogStyle = {
		width: '400px',
		paddingTop: 10,
		paddingLeft: 2,
		border: 'solid',
		borderWidth: 1,
		marginBottom: 5
	  }

	  const handleUpdateLike = () => {
		handleLikeButton(blog._id, blog)
	  }

	  const handleDelete = () => {
		const cfrm = window.confirm(`Remove blog You're NOT gonna need it! by ${blog.author}?`)
		if(cfrm){
			handleDeleteButton(blog._id)
		}
	  }

	return (
		<div className='blog' style={blogStyle}>
			<div style={hideWhenVisible}>
				<strong>{blog.title}</strong> - {blog.author}{' '}
				<button onClick={toggleVisible}>view</button>
			</div>
			<div style={showWhenVisible}>
				<strong>{blog.title}</strong> - {blog.author}{' '}
				<button onClick={toggleVisible}>hide</button>
				<br />
				<strong>{blog.url}</strong>
				<br />
				<strong>
					{blog.likes}
					<button onClick={handleUpdateLike}>like</button>
				</strong>
				<br />
				<strong>{blog.user?.name}</strong>
				<br />
				<button onClick={handleDelete}>remove</button>
			</div>
		</div>
	);
};

export default Blog;
