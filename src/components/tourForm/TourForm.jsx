import { useEffect, useId, useState } from 'react';
import './TourForm.scss';

const continents = [
	'Asia',
	'Africa',
	'North America',
	'South America',
	'Antarctica',
	'Europe',
	'Australia',
];

const initialTour = {
	name: '',
	price: '',
	continent: '',
	description: '',
	ageCategory: null,
	isHot: false,
};

const TourForm = ({ visible, onClose, onAddTour }) => {
	const nameInputId = useId();
	const priceInputId = useId();

	const [newTour, setNewTour] = useState(initialTour);

	useEffect(() => {
		if (!visible) {
			handleReset();
		}
	}, [visible]);

	const handleChangeTour = ({ target: { name, value, checked } }) => {
		if (name === 'isHot') {
			setNewTour(() => ({ ...newTour, [name]: checked }));
		} else {
			setNewTour(() => ({ ...newTour, [name]: value }));
		}
	};

	const handleReset = () => {
		setNewTour(initialTour);
	};

	const handleSubmitFunc = (event) => {
		event.preventDefault();
		const { name, price, description, continent, ageCategory, isHot } = event.target.elements;

		const nextTour = {
			id: Math.ceil(Math.random() * 1000000),
			name: name.value,
			price: price.value,
			description: description.value,
			continent: continent.value,
			ageCategory: ageCategory.value,
			isHot: isHot.checked,
		};

		onAddTour(nextTour);
		event.target.reset();
		onClose();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddTour({ ...newTour, id: Math.ceil(Math.random() * 1000000) });
		onClose();
	};

	return (
		<div className='tour-form' style={{ display: visible ? 'block' : 'none' }}>
			<button className='close' onClick={onClose}>
				x
			</button>
			<h2>Tour form</h2>

			<form id='add-tour' onSubmit={handleSubmit}>
				<div className='common-input-wrapper'>
					<label htmlFor={nameInputId}>Name</label>
					<input
						id={nameInputId}
						type='text'
						name='name'
						onChange={handleChangeTour}
						value={newTour.name}
					/>
				</div>
				<div className='common-input-wrapper'>
					<label htmlFor={priceInputId}>Price</label>
					<input
						id={priceInputId}
						type='number'
						name='price'
						value={newTour.price}
						onChange={handleChangeTour}
					/>
				</div>
				<div className='common-input-wrapper'>
					<label>Description</label>
					<textarea
						rows={5}
						name='description'
						value={newTour.description}
						onChange={handleChangeTour}
					/>
				</div>
				<div className='common-input-wrapper'>
					<label>Continent</label>
					<select name='continent' value={newTour.continent} onChange={handleChangeTour}>
						{continents.map((continent) => (
							<option key={continent} value={continent}>
								{continent}
							</option>
						))}
					</select>
				</div>
				<div>
					<p>Age category</p>
					<label>
						<input
							type='radio'
							name='ageCategory'
							value='children'
							checked={newTour.ageCategory === 'children'}
							onChange={handleChangeTour}
						/>
						With children
					</label>
					<label>
						<input
							type='radio'
							name='ageCategory'
							value='adult'
							checked={newTour.ageCategory === 'adult'}
							onChange={handleChangeTour}
						/>
						18+
					</label>
				</div>
				<div>
					<label>Hot tour</label>
					<input
						type='checkbox'
						name='isHot'
						value={newTour.isHot}
						checked={newTour.isHot}
						onChange={handleChangeTour}
					/>
				</div>

				<button className='btn secondary' type='reset' onClick={handleReset}>
					Clear
				</button>
				<button className='btn primary' type='submit'>
					Save
				</button>
			</form>
		</div>
	);
};

export default TourForm;
