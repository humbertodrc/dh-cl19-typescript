import React from "react";
import "./styles/User.css";
import { formatUserName } from '../../utils/utils';
export interface UserInterface {
	name: string;
	email: string;
}

const User: React.FC<UserInterface> = ({name, email}) => {
	return (
		<div className="user">
			<h4>{formatUserName(name)}</h4>
			<p>{email}</p>
		</div>
	);
};

export default User;
