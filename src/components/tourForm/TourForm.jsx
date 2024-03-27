import './TourForm.scss';

const continents = [
	'Asia',
	'Africa',
	' North America',
	'South America',
	'Antarctica',
	'Europe',
	'Australia',
];

const TourForm = ({ visible, onClose, onAddTour }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const [name, price] = event.target.elements;

		const nextTour = {
			id: Math.ceil(Math.random() * 1000000),
			name: name.value,
			price: price.value,
		};

		onAddTour(nextTour);
		event.target.reset();
		onClose();
	};

	return (
		<div className='tour-form' style={{ display: visible ? 'block' : 'none' }}>
			<button className='close' onClick={onClose}>
				x
			</button>
			<h2>Tour form</h2>

			<form onSubmit={handleSubmit}>
				<div className='common-input-wrapper'>
					<label>Name</label>
					<input type='text' name='name' />
				</div>
				<div className='common-input-wrapper'>
					<label>Price</label>
					<input type='number' name='price' />
				</div>

				<button className='btn primary' type='submit'>
					Save
				</button>
			</form>
		</div>
	);
};

export default TourForm;
