import tours from '../data/tours.json';

export const fetchTours = async () =>
	new Promise((resolve) => {
		setTimeout(() => resolve(tours), 5000);
	});
