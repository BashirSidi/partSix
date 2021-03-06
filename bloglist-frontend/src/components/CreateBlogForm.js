import React, { useState } from 'react';

const CreateBlogForm = ({ createBlogObject }) => {
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ url, setUrl ] = useState('');

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleAuthorChange = (event) => {
		setAuthor(event.target.value);
	};

	const handleUrlChange = (event) => {
		setUrl(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createBlogObject({
			title: title,
			author: author,
			url: url
		});
		setTitle('');
		setAuthor('');
		setUrl('');
	};
	return (
		<div className='formDiv'>
			<form onSubmit={handleSubmit}>
				<div style={{ fontSize: '24px' }}>Create Blog</div>
				<div>
					Title:
					<input type="text" value={title} onChange={handleTitleChange} />
				</div>
				<div>
					Author:
					<input type="text" value={author} onChange={handleAuthorChange} />
				</div>
				<div>
					Url:
					<input type="text" value={url} onChange={handleUrlChange} />
				</div>
				<button type="submit">Create</button>
			</form>
		</div>
	);
};

export default CreateBlogForm;
