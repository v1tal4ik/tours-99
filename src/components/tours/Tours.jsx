import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { fetchTours } from '../../helpers/getTours';
import TourItem from '../tour-item/TourItem';

import './Tours.scss';

const Tours = ({ theme }) => {
	const [tours, setTours] = useState([]);

	useEffect(() => {
		// console.log('work after mount in Tours page');
		const load = async () => {
			const responseData = await fetchTours();
			// console.log('load success', responseData);
			window.localStorage.setItem('tours', JSON.stringify(responseData));
			setTours(responseData);
		};

		const localStorageData = window.localStorage.getItem('tours');

		// console.log('response from localStorage', localStorageData);

		if (localStorageData) {
			setTours(JSON.parse(localStorageData));
			// console.log(JSON.parse(localStorageData));
		} else {
			load();
		}
	}, []);

	// console.log('render Tours', tours);

	return (
		<main
			className={clsx('tours-page', {
				light: theme === 'light',
				dark: theme === 'dark',
			})}>
			<h4>Tours Page</h4>

			<ul className='tours-list'>
				{tours.length > 0 ? (
					<>
						{tours.map((tour) => (
							<TourItem key={tour.id} {...tour} />
						))}
					</>
				) : (
					<p>loading...</p>
				)}
			</ul>
		</main>
	);
};

export default Tours;
