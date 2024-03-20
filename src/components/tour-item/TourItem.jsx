import clsx from 'clsx';

import './TourItem.scss';

const TourItem = ({ name, price, description }) => {
	return (
		<li className={clsx('tour-item')}>
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
			<div className='tou'></div>
		</li>
	);
};

export default TourItem;
