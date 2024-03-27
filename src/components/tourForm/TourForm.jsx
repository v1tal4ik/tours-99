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

const TourForm = ({ visible, onClose }) => {
	return (
		<div className='tour-form' style={{ display: visible ? 'block' : 'none' }}>
			<button className='close' onClick={onClose}>
				x
			</button>
			<h2>Tour form</h2>

			<form>
				<button className='btn primary' type='submit'>
					Save
				</button>
			</form>
		</div>
	);
};

export default TourForm;
