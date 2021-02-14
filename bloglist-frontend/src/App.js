import React, { useState, useEffect, useRef } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import loginService from './services/login';
import LoginForm from './components/LoginForm';
import Togglable from './components/Togglable';
import CreateBlogForm from './components/CreateBlogForm';
import Notification from './components/Notification';

const App = () => {
	const blogFormRef = useRef();
	const [ blogs, setBlogs ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState(null);
	const [ inforMessage, setInforMessage ] = useState(null);
	const [ user, setUser ] = useState(null);

	async function fetchData() {
		const blogs = await blogService.getAll();
		setBlogs(blogs);
	}
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		const loggedUserJson = window.localStorage.getItem('loggedBlogAppUser');
		if (loggedUserJson) {
			const user = JSON.parse(loggedUserJson);
			setUser(user);
			blogService.setToken(user.token);
		}
	}, []);

	const loginForm = () => (
		<Togglable btnCancel='cancel' buttonLabel="login">
			<LoginForm loginUser={handleLogin} />
		</Togglable>
	);

	const handleLogin = async (loginObject) => {
		try {
			const user = await loginService.login(loginObject);
			setUser(user);
			blogService.setToken(user.token);
			window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
		} catch (error) {
			setErrorMessage('Wrong username or password');
			setTimeout(() => {
				setErrorMessage(null);
			}, 5000);
		}
	};

	const handleLogout = () => {
		window.localStorage.removeItem('loggedBlogAppUser');
	};

	const hanleCreateBlogForm = async (createBlogObject) => {
		try {
			if (
				createBlogObject.title === '' ||
				createBlogObject.author === '' ||
				createBlogObject.url === ''
			) {
				setErrorMessage('All fields are required');
				setTimeout(() => {
					setErrorMessage(null);
				}, 5000);
			} else {
				blogFormRef.current.toggleVisibility();
				const newBlg = await blogService.create(createBlogObject);
				setInforMessage(`a new blog ${newBlg.title} by ${newBlg.author}`);
				setTimeout(() => {
					setInforMessage(null);
					fetchData();
				}, 5000);
			}
		} catch (error) {
			setErrorMessage('Invalid details');
			setTimeout(() => {
				setErrorMessage(null);
			}, 5000);
		}
	};

	const createBlogForm = () => (
		<Togglable btnCancel="cancel" buttonLabel="Create blog" ref={blogFormRef}>
			<CreateBlogForm createBlogObject={hanleCreateBlogForm} />
		</Togglable>
  );
  
  const handleLikeButton = async (id, blog) => {
	let newBlog = {
		title: blog.title,
		author: blog.author,
		url: blog.url,
		likes: blog.likes + 1
	}
	await blogService.update(id, newBlog);
	fetchData()
	
}	

const handleDelete = async (id) => {
	await blogService.remove(id);
	fetchData()
}

const sortedBlog = (blogs) => {
	return blogs.sort((a,b) => (b.likes) - (a.likes))
}  

	const blog = () => (
		<div>
			<h2>BLOGS</h2>
			<div>
				{createBlogForm()}
				
				{user.name} logged in <button onClick={handleLogout}>Logout</button>
			</div>
			{sortedBlog(blogs).map((blog) => <Blog key={blog._id} blog={blog} handleLikeButton={handleLikeButton} handleDeleteButton={handleDelete}  />)}
		</div>
  );

 


	return (
		<div>
			<h2>Blog app</h2>
			<Notification errorMessage={errorMessage} inforMessage={inforMessage} />
			{user === null ? loginForm() : blog()}
		</div>
	);
};

export default App;
