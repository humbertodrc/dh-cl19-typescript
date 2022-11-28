import React from "react";
import "./styles/User.css";
export interface UserInterface {
	name: string;
	email: string;
}

const User: React.FC<UserInterface> = ({name, email}) => {
	return (
		<div className="user">
			<h4>{name}</h4>
			<p>{email}</p>
		</div>
	);
};

export default User;
