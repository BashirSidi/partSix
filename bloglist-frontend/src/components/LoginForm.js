import React, { useState } from 'react';

const LoginForm = ({ loginUser }) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		loginUser({
			username: username,
			password: password
		});
		setPassword('');
		setUsername('');
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<h3>Log in to application</h3>
				</div>
				<div>
					Username:
					<input
						type="text"
						value={username}
						name="username"
						onChange={handleUsernameChange}
					/>
				</div>
				<div>
					Password:
					<input
						type="text"
						value={password}
						name="password"
						onChange={handlePasswordChange}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
