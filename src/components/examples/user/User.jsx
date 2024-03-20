import { useState } from 'react';

const User = () => {
	const [user, setUser] = useState({ name: 'Adam', age: 18 });

	// const handleChangeName = () => {
	// 	setUser({
	// 		...user,
	// 		name: 'David',
	// 	});
	// };

	// const handleChangeAge = () => {
	// 	setUser({
	// 		...user,
	// 		age: 25,
	// 	});
	// };

	const handleChangeUserProp = (prop, value) => {
		setUser({
			...user,
			[prop]: value,
		});
	};
	return (
		<div>
			<p>{user.name}</p>
			<p>{user.age}</p>

			<button
				onClick={() => {
					handleChangeUserProp('name', 'David');
				}}>
				Change name to David
			</button>
			<button
				onClick={() => {
					handleChangeUserProp('age', 20);
				}}>
				Change age to 20
			</button>
		</div>
	);
};

export default User;
