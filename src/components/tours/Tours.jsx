import TourItem from '../tour-item/TourItem';

const toursArray = [
	{
		id: 1,
		name: 'Portugalia vibe',
		price: 3000,
		continent: 'Europe',
		description: 'Best tour for discover Portugal',
	},
	{
		id: 2,
		name: 'The breath of Italy',
		price: 5000,
		continent: 'Europe',
		description: 'Best tour for discover Italia',
	},
	{
		id: 3,
		name: 'Spanish bullfight',
		price: 1000,
		continent: 'Europe',
		description: 'A new experience from watching a bullfight',
	},
	{
		id: 4,
		name: 'Germany race',
		price: 15000,
		continent: 'Europe',
		description: 'A quick walk on the German autobahns',
	},
	{
		id: 5,
		name: 'Indian traditions',
		price: 10000,
		continent: 'Asia',
		// description: 'Best tour for discover Asia',
	},
];

const Tours = () => {
	return (
		<main>
			<h4>Tours Page</h4>
			<ul>
				{toursArray.map((tour) => {
					return (
						<TourItem
							key={tour.id}
							name={tour.name}
							price={tour.price}
							description={tour.description}
						/>
					);
				})}
			</ul>
		</main>
	);
};

export default Tours;
