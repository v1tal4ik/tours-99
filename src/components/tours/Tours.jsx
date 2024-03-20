import clsx from 'clsx';
import TourItem from '../tour-item/TourItem';

import './Tours.scss';

const toursArray = [
	{
		id: 1,
		name: 'Portugalia vibe',
		price: 3000,
		continent: 'Europe',
		description: 'Best tour for discover Portugal',
		isHot: true,
	},
	{
		id: 2,
		name: 'The breath of Italy',
		price: 5000,
		continent: 'Europe',
		description: 'Best tour for discover Italia',
		isHot: false,
	},
	{
		id: 3,
		name: 'Spanish bullfight',
		price: 1000,
		continent: 'Europe',
		description: 'A new experience from watching a bullfight',
		isHot: true,
	},
	{
		id: 4,
		name: 'Germany race',
		price: 15000,
		continent: 'Europe',
		description: 'A quick walk on the German autobahns',
		isHot: true,
	},
	{
		id: 5,
		name: 'Indian traditions',
		price: 10000,
		continent: 'Asia',
		// description: 'Best tour for discover Asia',
		isHot: false,
	},
];

const Tours = ({ theme }) => {
	return (
		<main
			className={clsx('tours-page', {
				light: theme === 'light',
				dark: theme === 'dark',
			})}>
			<h4>Tours Page</h4>

			<ul className='tours-list'>
				{toursArray.map((tour) => (
					<TourItem key={tour.id} {...tour} />
				))}
			</ul>
		</main>
	);
};

export default Tours;
