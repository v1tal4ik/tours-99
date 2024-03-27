import clsx from 'clsx';

import './TourItem.scss';

const TourItem = ({ id, name, price, description, continent, ageCategory, isHot, onDelete }) => {
	return (
		<li className={clsx('tour-item', { isHot: isHot })}>
			<div className='tour-item-row'>
				<p className='title'>Name:</p>
				<p>{name}</p>
			</div>
			<div className='tour-item-row'>
				<p className='title'>Price:</p>
				<p>{price}$</p>
			</div>

			{description && (
				<div className='tour-item-row'>
					<p className='title'>Description:</p>
					<p>{description}</p>
				</div>
			)}
			<div className='tour-item-row'>
				<p className='title'>Continent:</p>
				<p>{continent}</p>
			</div>
			{ageCategory && (
				<div className='tour-item-row'>
					<p className='title'>Age category:</p>
					<p>{ageCategory}</p>
				</div>
			)}
			<div className='tour-item-row'>
				<button className='btn secondary' onClick={() => onDelete(id)}>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TourItem;
