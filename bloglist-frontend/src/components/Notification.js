import React from 'react';

const Notification = ({ errorMessage, inforMessage }) => {
	if (errorMessage === null && inforMessage === null) {
		return null;
	} else if (errorMessage !== null && inforMessage === null) {
		return <div className="errorMessage">{errorMessage}</div>;
	} else {
		return <div className="infoMessage">{inforMessage}</div>;
	}
};

export default Notification;
