import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { fetchTours } from '../../helpers/getTours';
import TourItem from '../tour-item/TourItem';
import TourForm from '../tourForm/TourForm';

import './Tours.scss';

const Tours = ({ theme }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [tours, setTours] = useState(null);

	const [searchValue, setSearchValue] = useState('');

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

	const handleChangeSearch = (event) => {
		setSearchValue(() => event.target.value);
	};

	// Modal actions

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	// Tour action

	const handleAddTour = (tourItem) => {
		setTours((prevState) => {
			// return new state
			return [...prevState, tourItem];
		});
	};

	const handleDeleteTour = (id) => {
		const nextTours = [...tours];
		const index = nextTours.findIndex((tour) => tour.id === id);
		nextTours.splice(index, 1);
		setTours(nextTours);
	};

	const filteredTours =
		tours && tours.filter((tour) => tour.name.toLowerCase().includes(searchValue.toLowerCase()));

	return (
		<main
			className={clsx('tours-page', {
				light: theme === 'light',
				dark: theme === 'dark',
			})}>
			<div className='tours-page-top'>
				<h4>Tours Page</h4>

				<input
					type='text'
					value={searchValue}
					placeholder='Search...'
					onChange={handleChangeSearch}
				/>

				<button className='btn secondary' onClick={handleOpenModal}>
					Add tour
				</button>
			</div>

			<TourForm visible={isOpen} onClose={handleCloseModal} onAddTour={handleAddTour} />

			<ul className='tours-list'>
				{filteredTours && filteredTours.length && filteredTours.length > 0 ? (
					<>
						{filteredTours.map((tour) => (
							<TourItem key={tour.id} {...tour} onDelete={handleDeleteTour} />
						))}
					</>
				) : (
					<p>no tours acccording your search</p>
				)}
				{filteredTours === null && <p>...loading</p>}
			</ul>
		</main>
	);
};

export default Tours;
